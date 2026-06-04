const container = document.getElementById("publications-container");

if (container) {

    const publications = LAB_DATA.publications;

    // Unique years descending order
    const years = [...new Set(
        publications.map(pub => pub.year)
    )].sort((a, b) => b - a);

    years.forEach(year => {

        const yearPubs = publications.filter(
            pub => pub.year === year
        );

        let yearHTML = `
            <div class="publication-year-section">

                <h2 class="publication-year">
                    ${year}
                </h2>
        `;

        // Journal Articles
        const journals = yearPubs.filter(
            pub => pub.type === "Journal"
        );

        if (journals.length > 0) {

            yearHTML += `
                <h3 class="publication-category">
                    Journal Articles
                </h3>
            `;

            journals.forEach(pub => {

                yearHTML += createPublicationCard(pub);

            });
        }

        // Conference Papers
        const conferences = yearPubs.filter(
            pub => pub.type === "Conference"
        );

        if (conferences.length > 0) {

            yearHTML += `
                <h3 class="publication-category">
                    Conference Papers
                </h3>
            `;

            conferences.forEach(pub => {

                yearHTML += createPublicationCard(pub);

            });
        }

        yearHTML += `</div>`;

        container.innerHTML += yearHTML;
    });
}


// Publication Card

function createPublicationCard(pub) {

    return `

        <div class="publication-card">

            <span class="publication-type">
                ${pub.type}
            </span>

            <h4 class="publication-title">

                ${pub.title}

            </h4>

            <p class="publication-authors">

                ${pub.authors}

            </p>

            <p class="publication-venue">

                ${pub.venue}

            </p>

            <div class="publication-links">

                ${
                    pub.doi
                    ? `
                    <a href="${pub.doi}"
                       target="_blank"
                       class="pub-btn">

                       DOI

                    </a>
                    `
                    : ''
                }

                ${
                    pub.pdf
                    ? `
                    <a href="${pub.pdf}"
                       target="_blank"
                       class="pub-btn">

                       PDF

                    </a>
                    `
                    : ''
                }

            </div>

        </div>

    `;
}