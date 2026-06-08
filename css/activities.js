const container = document.getElementById("activities-container");

LAB_DATA.activities.forEach((activity, index) => {

  container.innerHTML += `

    <div class="activity-card">

      <div class="activity-header">

        <h2>${activity.title}</h2>

        <div class="activity-meta">

          <span class="activity-date">${activity.date}</span>

          <span class="activity-role">${activity.role}</span>

        </div>

      </div>

      <p class="activity-description">
        ${activity.description}
      </p>

      <div class="activity-gallery">

        ${activity.images.map(img => `

          <img
            src="${img}"
            class="activity-thumb"
            onclick="openLightbox('${img}')"
          >

        `).join('')}

      </div>

    </div>

  `;

});


// LIGHTBOX

document.body.innerHTML += `

<div id="lightbox" class="lightbox">

  <span class="close-lightbox" onclick="closeLightbox()">
    &times;
  </span>

  <img class="lightbox-content" id="lightbox-img">

</div>

`;

function openLightbox(src) {

  document.getElementById("lightbox").style.display = "flex";

  document.getElementById("lightbox-img").src = src;
}

function closeLightbox() {

  document.getElementById("lightbox").style.display = "none";
}