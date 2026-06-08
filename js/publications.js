// Publication filtering and rendering functionality

// Format authors
function formatAuthors(authors) {
    if (!authors) return '';
    const authorList = authors.split(',').map(a => a.trim());
    if (authorList.length === 1) return authorList[0];
    if (authorList.length === 2) return `${authorList[0]} and ${authorList[1]}`;
    return `${authorList[0]}, ${authorList[1]}, et al.`;
}

// Format citation
function formatCitation(pub) {
    let citation = `${formatAuthors(pub.authors)} (${pub.year}). `;
    citation += `<strong>${pub.title}</strong>. `;
    citation += `<em>${pub.venue}</em>`;
    
    const details = [];
    if (pub.volume) details.push(`Vol. ${pub.volume}`);
    if (pub.number) details.push(`No. ${pub.number}`);
    if (pub.pages) details.push(`pp. ${pub.pages}`);
    
    if (details.length > 0) {
        citation += `, ${details.join(', ')}`;
    }
    
    if (pub.publisher) {
        citation += `. ${pub.publisher}`;
    }
    
    citation += ".";
    return citation;
}

// Render publications (without year grouping)
function renderPublications(publications) {
    const container = document.getElementById('publications-container');
    if (!container) return;
    
    if (publications.length === 0) {
        container.innerHTML = '<div class="no-results">No publications found.</div>';
        return;
    }
    
    let html = '<div class="publications-list">';
    
    publications.forEach(pub => {
        // Create DOI link if available
        let doiLink = '';
        if (pub.doi && pub.doi.trim()) {
            let doiUrl = pub.doi;
            if (!doiUrl.startsWith('http')) {
                doiUrl = 'https://doi.org/' + doiUrl;
            }
            doiLink = `<a href="${doiUrl}" target="_blank" class="doi-link">DOI: ${pub.doi}</a>`;
        }
        
        html += `
            <div class="publication-card" data-type="${pub.type}">
                <div class="publication-year-badge">${pub.year}</div>
                <h3 class="publication-title">${pub.title}</h3>
                <div class="publication-authors">${formatAuthors(pub.authors)}</div>
                <div class="publication-citation">${formatCitation(pub)}</div>
                <div class="publication-meta">
                    <span class="pub-type-badge ${pub.type.toLowerCase()}">${pub.type}</span>
                    ${pub.publisher ? `<span class="publisher">${pub.publisher}</span>` : ''}
                    ${doiLink}
                </div>
            </div>
        `;
    });
    
    html += '</div>';
    container.innerHTML = html;
}

// Update stats display
function updateStats() {
    const statsContainer = document.getElementById('publication-stats');

    if (statsContainer && typeof publicationStats !== 'undefined') {
        statsContainer.innerHTML = `
            <div class="stat-item">
                <span class="stat-number">${publicationStats.totalPublications}</span>
                <span class="stat-label">Total Publications</span>
            </div>
            <div class="stat-item">
                <span class="stat-number">${publicationStats.totalJournals}</span>
                <span class="stat-label">Journal Articles</span>
            </div>
            <div class="stat-item">
                <span class="stat-number">${publicationStats.totalConferences}</span>
                <span class="stat-label">Conference Papers</span>
            </div>
        `;
    }
}

// Filter functionality
function setupFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Get filter type
            const filterType = button.getAttribute('data-type');
            let publications = [];
            
            if (filterType === 'All') {
                publications = publicationsData.all;
            } else if (filterType === 'Journal') {
                publications = publicationsData.journals;
            } else if (filterType === 'Conference') {
                publications = publicationsData.conferences;
            }
            
            // Render filtered publications
            renderPublications(publications);
        });
    });
}

// Initialize when page loads
if (typeof publicationsData !== 'undefined') {
    // Update stats
    updateStats();
    
    // Render all publications initially
    renderPublications(publicationsData.all);
    
    // Setup filters
    setupFilters();
}
