/// Fonction pour charger les régions depuis l'API Geo
function loadRegions() {
    fetch('https://geo.api.gouv.fr/regions')
        .then(response => response.json())
        .then(data => {
            const regionSelect = document.getElementById('regionSelect');
            data.forEach(region => {
                const option = document.createElement('option');
                option.value = region.code;
                option.text = region.nom;
                regionSelect.appendChild(option);
            });
        });
}

// Fonction pour charger les départements d'une région depuis l'API Geo
function loadDepartements(regionCode) {
    fetch(`https://geo.api.gouv.fr/regions/${regionCode}/departements`)
        .then(response => response.json())
        .then(data => {
            const departementSelect = document.getElementById('departementSelect');
            departementSelect.innerHTML = ''; // Réinitialiser la liste des départements
            data.forEach(departement => {
                const option = document.createElement('option');
                option.value = departement.code;
                option.text = departement.nom;
                departementSelect.appendChild(option);
            });
        });
}

// Fonction pour charger les communes d'un département depuis l'API Geo
function loadCommunes(departementCode) {
    fetch(`https://geo.api.gouv.fr/departements/${departementCode}/communes`)
        .then(response => response.json())
        .then(data => {
            const communeSelect = document.getElementById('communeSelect');
            communeSelect.innerHTML = ''; // Réinitialiser la liste des communes
            data.forEach(commune => {
                const option = document.createElement('option');
                option.value = commune.code;
                option.text = commune.nom;
                communeSelect.appendChild(option);
            });
        });
}

// Charger les régions au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
    loadRegions();

    // Écouter les changements de sélection de la région
    const regionSelect = document.getElementById('regionSelect');
    regionSelect.addEventListener('change', (event) => {
        const selectedRegionCode = event.target.value;
        loadDepartements(selectedRegionCode);
    });

    // Écouter les changements de sélection du département
    const departementSelect = document.getElementById('departementSelect');
    departementSelect.addEventListener('change', (event) => {
        const selectedDepartementCode = event.target.value;
        loadCommunes(selectedDepartementCode);
    });
});