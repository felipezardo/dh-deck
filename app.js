//consumindo api//
const API_BASE_URL = "https://api-daggersheets.vercel.app";
let fullData = {}; // Começa vazio


// ==========================================
// 1. DADOS ESTÁTICOS (TEXTOS E REGRAS)
// ==========================================
const classDomains = {
    'Bardo': ['Graça', 'Códice'],
    'Druida': ['Sabedoria', 'Arcano'],
    'Guardião': ['Lâmina', 'Valor'],
    'Patrulheiro': ['Sabedoria', 'Falange'],
    'Ladino': ['Meia-Noite', 'Graça'],
    'Serafim': ['Esplendor', 'Valor'],
    'Feiticeiro': ['Arcano', 'Meia-Noite'],
    'Guerreiro': ['Lâmina', 'Falange'],
    'Mago': ['Códice', 'Esplendor'],
    'BloodHunter': ['Blood', 'Lâmina'],
    'Pugilista': ['Valor', 'Falange'],
    'Assassino': ['Lâmina', 'Meia-Noite'],
    'Bruxa': ['Pavor', 'Sabedoria'],
    'Warlock': ['Pavor', 'Graça']
};

const classBaseStats = {
    'Bardo': { evasion: 10, hp: 5 },
    'Druida': { evasion: 10, hp: 6 },
    'Guardião': { evasion: 9, hp: 7 },
    'Patrulheiro': { evasion: 12, hp: 6 },
    'Ladino': { evasion: 12, hp: 6 },
    'Serafim': { evasion: 9, hp: 7 },
    'Feiticeiro': { evasion: 10, hp: 6 },
    'Guerreiro': { evasion: 11, hp: 6 },
    'Mago': { evasion: 11, hp: 5 },
    'BloodHunter': { evasion: 9, hp: 7 },
    'Pugilista': { evasion: 10, hp: 6 },
    'Assassino': { evasion: 12, hp: 5 },
    'Bruxa': { evasion: 10, hp: 6 },
    'Warlock': { evasion: 11, hp: 5 }
};

const classColors = {
    'Bardo': ['#ae3b7c', '#3364a3'],
    'Druida': ['#17633b', '#623b74'],
    'Guardião': ['#b75d1c', '#892E29'],
    'Patrulheiro': ['#c4cbcd', '#17633b'], 
    'Ladino': ['#3e4341', '#ae3b7c'],
    'Serafim': ['#C2A91B', '#b75d1c'],
    'Feiticeiro': ['#623b74', '#3e4341'],
    'Guerreiro': ['#892E29', '#c4cbcd'],
    'Mago': ['#3364a3', '#C2A91B'],
    'BloodHunter': ['#5f0505', '#892E29'], 
    'Pugilista': ['#e2680e', '#a4a9a8'],
    'Assassino': ['#af231c', '#3e4341'], 
    'Bruxa': ['#4e345b', '#244e30'],
    'Warlock': ['#4e345b', '#8d3965']
};

// ==========================================
// 2. ELEMENTOS E ESTADO
// ==========================================
const STORAGE_KEY = 'daggerheart_manager_v11_tabs_equip';
let characters = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
let activeCharId = null;
let editingAvatarCharId = null;

// Referências DOM Principais
const elLogo = document.getElementById('logo-home'); 
const elBtnBack = document.getElementById('btn-back-home'); 
const elName = document.getElementById('char-name');
const elClass = document.getElementById('char-class');
const elDropdownContainer = document.getElementById('subclass-dropdown'); 
const elDropdownDisplay = document.getElementById('subclass-display');    
const elDropdownOptions = document.getElementById('subclass-options');    
const elAncestryContainer = document.getElementById('ancestry-dropdown');
const elAncestryDisplay = document.getElementById('ancestry-display');
const elAncestryOptions = document.getElementById('ancestry-options');
const elCommunity = document.getElementById('char-community');
const elTransformation = document.getElementById('char-transformation');
const elDescription = document.getElementById('class-description-box');

// Novas Referências para a Home e Nível
const elHomeView = document.getElementById('home-view');
const elSheetView = document.getElementById('sheet-view');
const elHomeGrid = document.getElementById('home-characters-grid');
const elLevel = document.getElementById('char-level');

// ==========================================
// 3. INICIALIZAÇÃO
// ==========================================
async function init() {
    try {
        console.log("Conectando à API Daggersheets...");
        
        const response = await fetch(`${API_BASE_URL}/api`);
        
        if (!response.ok) throw new Error("Erro ao carregar dados da API");
        
        fullData = await response.json();
        console.log("Dados carregados com sucesso!", fullData);

        loadSelectOptions();
        setupSheetTabs();
        setupEventListeners();
        
        goHome();

    } catch (error) {
        console.error("Falha na inicialização:", error);
        alert("Erro ao conectar com o servidor. Verifique sua internet ou se a API está acordada.");
    }
}

// ==========================================
// TELA HOME E CARDS DE PERSONAGENS
// ==========================================
function goHome() {
    activeCharId = null;
    elSheetView.classList.add('hidden');
    elHomeView.classList.remove('hidden');
    renderHome();
}

function renderHome() {
    elHomeGrid.innerHTML = '';
    
    const trashSvg = `<svg viewBox="0 0 24 24"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg>`;
    const editSvg = `<svg viewBox="0 0 24 24"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>`;

    characters.forEach(char => {
        const className = char.class || 'Classe Indefinida';
        const avatarUrl = char.avatar || `https://placehold.co/150x150/1a2639/d4af37?text=${encodeURIComponent(char.name ? char.name.charAt(0).toUpperCase() : '?')}`;
        const colors = classColors[char.class] || ['#333', '#111'];
        const bannerGradient = `background: linear-gradient(135deg, ${colors[0]} 45%, ${colors[1]} 100%);`;

        const card = document.createElement('div');
        card.className = 'home-char-card';
        card.innerHTML = `
            <div class="card-banner" onclick="selectCharacter(${char.id})" style="${bannerGradient}"></div>
            <div class="card-avatar-wrapper">
                <img src="${avatarUrl}" class="card-avatar" alt="Avatar" onclick="selectCharacter(${char.id})">
                <button class="edit-avatar-btn" onclick="editAvatar(event, ${char.id})" title="Editar Foto">${editSvg}</button>
            </div>
            <div class="card-info" onclick="selectCharacter(${char.id})">
                <h3>${char.name || 'Sem Nome'}</h3>
                <p>Nível: <span>${char.level || 1}</span></p>
                <p>Classe: <span>${className}</span></p>
            </div>
            <button class="btn-delete-card" onclick="deleteCharacterHome(event, ${char.id})" title="Excluir">${trashSvg}</button>
        `;
        elHomeGrid.appendChild(card);
    });

    const addCard = document.createElement('div');
    addCard.className = 'home-char-card add-char-card';
    addCard.onclick = () => createNewCharacter();
    addCard.innerHTML = `<div class="add-icon">+</div><h3>Nova Ficha</h3>`;
    elHomeGrid.appendChild(addCard);
}

function editAvatar(e, id) {
    e.stopPropagation(); 
    editingAvatarCharId = id;
    document.getElementById('avatar-upload-input').value = ""; 
    document.getElementById('avatar-url-input').value = "";
    document.getElementById('avatar-modal').showModal();
}

function deleteCharacterHome(e, id) {
    e.stopPropagation();
    activeCharId = id; 
    document.getElementById('confirm-modal').showModal();
}

// ==========================================
// FUNÇÕES AUXILIARES DE INICIALIZAÇÃO
// ==========================================
function loadSelectOptions() {
    elClass.innerHTML = '<option value="">Selecione...</option>';
    Object.keys(classDomains).forEach(cls => {
        elClass.innerHTML += `<option value="${cls}">${cls}</option>`;
    });

    elCommunity.innerHTML = '<option value="">Selecione...</option>';
    if(fullData.Comunidades) {
        fullData.Comunidades.forEach(c => {
            elCommunity.innerHTML += `<option value="${c.nome}">${c.nome}</option>`;
        });
    }
    if(elTransformation && fullData.Transformacoes) {
        elTransformation.innerHTML = '<option value="">Nenhuma</option>';
        fullData.Transformacoes.forEach(t => {
            elTransformation.innerHTML += `<option value="${t.nome}">${t.nome}</option>`;
        });
    }
}

// ==========================================
// 4. LÓGICA DE PERSONAGEM
// ==========================================
function createNewCharacter() {
    const defaultInventory = "uma tocha, 15m de corda, suprimentos,\nbásicos e um punhado de ouro. E uma Poção de Vida Menor OU\numa Poção de Vigor Menor";

    const newChar = {
        id: Date.now(),
        name: '', class: '', subclass: [], ancestry: [], community: '', transformation: '', avatar: '', level: 1,
        stats: { agility: 0, strength: 0, finesse: 0, instinct: 0, presence: 0, knowledge: 0 },
        
        combat: {
            evasion: 10, armorValue: 0, armorMarks: [],
            thresholds: { major: 0, severe: 0 },
            hopeMarks: [], hpMax: 6, hpMarks: [], stressMax: 6, stressMarks: []
        },

        experiences: Array(5).fill({ name: '', val: '' }),
        evolution: { p2: [], p3: [], p4: [] },

        equipment: {
            proficiency: 1,
            primary: { name: '', attr: '', range: '', dmg: '', traits: '' },
            secondary: { name: '', attr: '', range: '', dmg: '', traits: '' },
            armor: { name: '', base: '', thresholds: '', traits: '' },
            inventory: defaultInventory,
            notes: ''
        },

        deck: []
    };
    characters.push(newChar);
    saveToStorage();
    selectCharacter(newChar.id);
}

function selectCharacter(id) {
    activeCharId = id;
    const char = characters.find(c => c.id === id);
    if (!char) return;

    elHomeView.classList.add('hidden');
    elSheetView.classList.remove('hidden');

    elName.value = char.name || '';
    elLevel.value = char.level || 1;
    document.getElementById('filter-level').value = char.level || 1; 

    elClass.value = char.class || '';
    elCommunity.value = char.community || '';
    if(elTransformation) elTransformation.value = char.transformation || '';

    const s = char.stats || { agility:0, strength:0, finesse:0, instinct:0, presence:0, knowledge:0 };
    document.getElementById('stat-agility').value = s.agility;
    document.getElementById('stat-strength').value = s.strength;
    document.getElementById('stat-finesse').value = s.finesse;
    document.getElementById('stat-instinct').value = s.instinct;
    document.getElementById('stat-presence').value = s.presence;
    document.getElementById('stat-knowledge').value = s.knowledge;

    const c = char.combat || { evasion: 10, armorValue: 0, armorMarks: [], thresholds: { major:0, severe:0 }, hopeMarks: [], hpMax: 6, hpMarks: [], stressMax: 6, stressMarks: [] };
    document.getElementById('char-evasion').value = c.evasion;
    document.getElementById('char-armor-value').value = c.armorValue;
    renderResourceSlots('armor-slots-display', c.armorValue, c.armorMarks);
    document.getElementById('thresh-major-val').value = c.thresholds.major;
    document.getElementById('thresh-severe-val').value = c.thresholds.severe;
    renderResourceSlots('hope-slots-display', 6, c.hopeMarks);
    document.getElementById('char-hp-max').value = c.hpMax;
    renderResourceSlots('hp-slots-display', c.hpMax, c.hpMarks);
    document.getElementById('char-stress-max').value = c.stressMax;
    renderResourceSlots('stress-slots-display', c.stressMax, c.stressMarks);

    const e = char.equipment || { 
        proficiency: 1, 
        primary: { name: '', attr: '', range: '', dmg: '', traits: '' },
        secondary: { name: '', attr: '', range: '', dmg: '', traits: '' },
        armor: { name: '', base: '', thresholds: '', traits: '' },
        inventory: '', 
        notes: '' 
    };

    document.getElementById('char-proficiency').value = e.proficiency || 1;

    const p = e.primary || {};
    document.getElementById('equip-p-name').value = p.name || '';
    document.getElementById('equip-p-attr').value = p.attr || '';
    document.getElementById('equip-p-range').value = p.range || '';
    document.getElementById('equip-p-dmg').value = p.dmg || '';
    document.getElementById('equip-p-traits').value = p.traits || '';

    const sec = e.secondary || {};
    document.getElementById('equip-s-name').value = sec.name || '';
    document.getElementById('equip-s-attr').value = sec.attr || '';
    document.getElementById('equip-s-range').value = sec.range || '';
    document.getElementById('equip-s-dmg').value = sec.dmg || '';
    document.getElementById('equip-s-traits').value = sec.traits || '';

    const arm = e.armor || {};
    document.getElementById('equip-a-name').value = arm.name || '';
    document.getElementById('equip-a-base').value = arm.base || '';
    document.getElementById('equip-a-thresholds').value = arm.thresholds || '';
    document.getElementById('equip-a-traits').value = arm.traits || '';

    document.getElementById('equip-inventory').value = e.inventory || '';
    document.getElementById('equip-notes').value = e.notes || '';

    let selectedSubclasses = Array.isArray(char.subclass) ? char.subclass : (char.subclass ? [char.subclass] : []);
    setupSubclassDropdown(char.class, selectedSubclasses);

    let selectedAncestries = Array.isArray(char.ancestry) ? char.ancestry : (char.ancestry ? [char.ancestry] : []);
    char.ancestry = selectedAncestries;
    setupAncestryDropdown(selectedAncestries);

    const expNames = document.querySelectorAll('.exp-name');
    const expVals = document.querySelectorAll('.exp-val');
    const exps = char.experiences || Array(5).fill({name: '', val: ''});
    exps.forEach((exp, i) => {
        if(expNames[i]) expNames[i].value = exp.name || '';
        if(expVals[i]) expVals[i].value = exp.val || '';
    });

    const evo = char.evolution || { p2: [], p3: [], p4: [] };
    const setChecks = (className, arr) => {
        document.querySelectorAll('.' + className).forEach((cb, i) => cb.checked = !!arr[i]);
    };
    setChecks('p2-check', evo.p2);
    setChecks('p3-check', evo.p3);
    setChecks('p4-check', evo.p4);

    updateClassDescription(char.class);
    renderOriginCards(char);
    renderDeck();
}

function saveCurrentChar() {
    const char = characters.find(c => c.id === activeCharId);
    if (!char) return;

    char.name = elName.value;
    char.level = parseInt(elLevel.value) || 1;
    char.class = elClass.value;
    char.community = elCommunity.value;
    if(elTransformation) char.transformation = elTransformation.value;

    const checkboxes = elDropdownOptions.querySelectorAll('input[type="checkbox"]:checked');
    const selectedValues = Array.from(checkboxes).map(cb => cb.value);
    char.subclass = selectedValues;
    updateSubclassDisplay(selectedValues);

    char.stats = {
        agility: document.getElementById('stat-agility').value,
        strength: document.getElementById('stat-strength').value,
        finesse: document.getElementById('stat-finesse').value,
        instinct: document.getElementById('stat-instinct').value,
        presence: document.getElementById('stat-presence').value,
        knowledge: document.getElementById('stat-knowledge').value
    };

    const getMarksFromContainer = (containerId) => {
        const container = document.getElementById(containerId);
        if (!container) return [];
        const boxes = container.querySelectorAll('input[type="checkbox"]');
        return Array.from(boxes).map(box => box.checked);
    };

    char.combat = {
        evasion: document.getElementById('char-evasion').value,
        armorValue: document.getElementById('char-armor-value').value,
        armorMarks: getMarksFromContainer('armor-slots-display'),
        thresholds: {
            major: document.getElementById('thresh-major-val').value,
            severe: document.getElementById('thresh-severe-val').value
        },
        hopeMarks: getMarksFromContainer('hope-slots-display'),
        hpMax: document.getElementById('char-hp-max').value,
        hpMarks: getMarksFromContainer('hp-slots-display'),
        stressMax: document.getElementById('char-stress-max').value,
        stressMarks: getMarksFromContainer('stress-slots-display')
    };

    char.equipment = {
        proficiency: document.getElementById('char-proficiency').value,
        primary: {
            name: document.getElementById('equip-p-name').value,
            attr: document.getElementById('equip-p-attr').value,
            range: document.getElementById('equip-p-range').value,
            dmg: document.getElementById('equip-p-dmg').value,
            traits: document.getElementById('equip-p-traits').value
        },
        secondary: {
            name: document.getElementById('equip-s-name').value,
            attr: document.getElementById('equip-s-attr').value,
            range: document.getElementById('equip-s-range').value,
            dmg: document.getElementById('equip-s-dmg').value,
            traits: document.getElementById('equip-s-traits').value
        },
        armor: {
            name: document.getElementById('equip-a-name').value,
            base: document.getElementById('equip-a-base').value,
            thresholds: document.getElementById('equip-a-thresholds').value,
            traits: document.getElementById('equip-a-traits').value
        },
        inventory: document.getElementById('equip-inventory').value,
        notes: document.getElementById('equip-notes').value
    };

    const expNames = document.querySelectorAll('.exp-name');
    const expVals = document.querySelectorAll('.exp-val');
    char.experiences = Array.from(expNames).map((el, i) => ({
        name: el.value,
        val: expVals[i] ? expVals[i].value : ''
    }));

    const getChecks = (className) => Array.from(document.querySelectorAll('.' + className)).map(cb => cb.checked);
    char.evolution = {
        p2: getChecks('p2-check'),
        p3: getChecks('p3-check'),
        p4: getChecks('p4-check')
    };

    saveToStorage();
    renderOriginCards(char);
}

function renderResourceSlots(containerId, count, marksArray = []) {
    const container = document.getElementById(containerId);
    if(!container) return;
    container.innerHTML = '';
    count = parseInt(count) || 0;
    for (let i = 0; i < count; i++) {
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'custom-checkbox';
        if (marksArray[i] === true) checkbox.checked = true;
        checkbox.addEventListener('change', saveCurrentChar);
        container.appendChild(checkbox);
    }
}

// NOVO: A função agora busca a descrição da API (fullData) ao invés do objeto local
function updateClassDescription(className) {
    if (!className || !fullData.DescricoesDeClasse || !fullData.DescricoesDeClasse[className]) {
        elDescription.classList.add('hidden');
        elDescription.innerHTML = '';
        return;
    }
    elDescription.innerHTML = fullData.DescricoesDeClasse[className];
    elDescription.classList.remove('hidden');
}

function setupSubclassDropdown(className, selectedValues = []) {
    elDropdownOptions.innerHTML = ''; 
    if (!className) {
        elDropdownDisplay.innerText = "Primeiro a Classe...";
        return;
    }
    if (fullData['Sub-Classes']) {
        const subs = fullData['Sub-Classes'].filter(s => s.nome.startsWith(className));
        if(subs.length === 0) elDropdownDisplay.innerText = "Nenhuma subclasse encontrada";
        subs.forEach((sub) => {
            const optionDiv = document.createElement('div');
            optionDiv.className = 'option-item';
            const isChecked = selectedValues.includes(sub.nome);
            if (isChecked) optionDiv.classList.add('selected');
            optionDiv.innerHTML = `<input type="checkbox" value="${sub.nome}" ${isChecked ? 'checked' : ''}><span>${sub.nome}</span>`;
            optionDiv.addEventListener('click', (e) => {
                e.stopPropagation(); 
                const checkbox = optionDiv.querySelector('input');
                const newState = !checkbox.checked; 
                checkbox.checked = newState;
                if (newState) optionDiv.classList.add('selected'); else optionDiv.classList.remove('selected');
                saveCurrentChar(); 
            });
            elDropdownOptions.appendChild(optionDiv);
        });
    }
    updateSubclassDisplay(selectedValues);
}

function updateSubclassDisplay(selectedValues) {
    if (!selectedValues || selectedValues.length === 0) {
        elDropdownDisplay.innerText = "Selecione...";
        return;
    }
    const displayNames = selectedValues.map(val => {
        const parts = val.split(':');
        return parts.length > 1 ? parts[1].trim() : val;
    });
    elDropdownDisplay.innerText = displayNames.join(', ');
}

function setupAncestryDropdown(selectedValues = []) {
    elAncestryOptions.innerHTML = ''; 
    if (fullData.Ancestralidades) {
        fullData.Ancestralidades.forEach((ancestry) => {
            const optionDiv = document.createElement('div');
            optionDiv.className = 'option-item';
            
            const indexInSelection = selectedValues.indexOf(ancestry.nome);
            const isSelected = indexInSelection !== -1;
            
            if (isSelected) optionDiv.classList.add('selected');
            
            let htmlContent = `<input type="checkbox" value="${ancestry.nome}" style="display:none;" ${isSelected ? 'checked' : ''}><span>${ancestry.nome}</span>`;
            
            if (isSelected) {
                htmlContent += `<span class="order-badge">${indexInSelection + 1}</span>`;
            }
            
            optionDiv.innerHTML = htmlContent;
            
            optionDiv.addEventListener('click', (e) => {
                e.stopPropagation();
                const char = characters.find(c => c.id === activeCharId);
                let currentSelected = Array.isArray(char.ancestry) ? [...char.ancestry] : [];
                
                const alreadySelectedIndex = currentSelected.indexOf(ancestry.nome);
                
                if (alreadySelectedIndex !== -1) {
                    currentSelected.splice(alreadySelectedIndex, 1);
                } else {
                    if (currentSelected.length >= 2) {
                        alert("Você só pode selecionar até 2 ancestralidades.");
                        return;
                    }
                    currentSelected.push(ancestry.nome); 
                }
                
                char.ancestry = currentSelected;
                setupAncestryDropdown(currentSelected); 
                saveCurrentChar(); 
            });
            
            elAncestryOptions.appendChild(optionDiv);
        });
    }
    updateAncestryDisplay(selectedValues);
}

function updateAncestryDisplay(selectedValues) {
    if (!selectedValues || selectedValues.length === 0) {
        elAncestryDisplay.innerText = "Selecione...";
        return;
    }
    elAncestryDisplay.innerText = selectedValues.join(', ');
}


window.addEventListener('click', (e) => {
    if (elDropdownContainer && !elDropdownContainer.contains(e.target)) elDropdownOptions.classList.add('hidden');
    if (elAncestryContainer && !elAncestryContainer.contains(e.target)) elAncestryOptions.classList.add('hidden');
});

if (elDropdownDisplay) {
    elDropdownDisplay.addEventListener('click', (e) => {
        const char = characters.find(c => c.id === activeCharId);
        if (char && char.class) elDropdownOptions.classList.toggle('hidden');
    });
}

if (elAncestryDisplay) {
    elAncestryDisplay.addEventListener('click', (e) => {
        elAncestryOptions.classList.toggle('hidden');
    });
}

function renderOriginCards(char) {
    const container = document.getElementById('origin-cards-container');
    container.innerHTML = '';
    const addStaticCard = (category, itemName) => {
        if (!itemName || !fullData[category]) return;
        const item = fullData[category].find(i => i.nome === itemName);
        if (item) {
            const div = document.createElement('div');
            div.className = 'rpg-card static-card';
            div.innerHTML = `<img src="${API_BASE_URL}/images/${item.img}" alt="${itemName}" onerror="this.src='https://placehold.co/220x320/333/c0a062?text=${encodeURIComponent(itemName)}'">`;
            container.appendChild(div);
        }
    };
    
    addStaticCard('Comunidades', char.community);
    
    let ancestries = Array.isArray(char.ancestry) ? char.ancestry : (char.ancestry ? [char.ancestry] : []);
    ancestries.forEach(anc => addStaticCard('Ancestralidades', anc));
    
    if (char.transformation) addStaticCard('Transformacoes', char.transformation);
    let subs = Array.isArray(char.subclass) ? char.subclass : (char.subclass ? [char.subclass] : []);
    subs.forEach(subName => addStaticCard('Sub-Classes', subName));
}

function saveToStorage() {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(characters));
    } catch (e) {
        console.error(e);
        alert("Erro ao salvar! Se você subiu uma imagem, ela pode ser muito pesada para a memória do navegador. Tente escolher uma imagem menor ou use um Link (URL).");
    }
}

function renderDeck() {
    const char = characters.find(c => c.id === activeCharId);
    const containerActive = document.getElementById('active-cards-container');
    const containerReserve = document.getElementById('reserve-cards-container');
    containerActive.innerHTML = '';
    containerReserve.innerHTML = '';
    let activeCount = 0;
    let reserveCount = 0;
    if(char.deck) {
        char.deck.forEach((card, index) => {
            const cardEl = createDeckCard(card, index);
            if (card.status === 'active') {
                containerActive.appendChild(cardEl);
                activeCount++;
            } else {
                containerReserve.appendChild(cardEl);
                reserveCount++;
            }
        });
    }
    document.getElementById('active-count').innerText = activeCount;
    document.getElementById('reserve-count').innerText = reserveCount;
}

function createDeckCard(card, index) {
    const div = document.createElement('div');
    div.className = 'rpg-card';
    const iconDown = `<svg viewBox="0 0 24 24"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/></svg>`;
    const iconUp = `<svg viewBox="0 0 24 24"><path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6 1.41 1.41z"/></svg>`;
    const iconTrash = `<svg viewBox="0 0 24 24"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg>`;
    const moveBtn = card.status === 'active' 
        ? `<button onclick="moveCard(${index}, 'reserve')" title="Mover para Mochila">${iconDown}</button>`
        : `<button onclick="moveCard(${index}, 'active')" title="Equipar na Mão">${iconUp}</button>`;
    div.innerHTML = `<img src="${API_BASE_URL}/images/${card.img}" alt="${card.name}" onerror="this.src='https://placehold.co/400x600/2a2a2a/c0a062?text=${encodeURIComponent(card.name)}'"><div class="card-actions">${moveBtn}<button class="btn-trash" onclick="removeCard(${index})" title="Remover do Grimório">${iconTrash}</button></div>`;
    return div;
}

function moveCard(index, newStatus) {
    const char = characters.find(c => c.id === activeCharId);
    char.deck[index].status = newStatus;
    saveToStorage();
    renderDeck();
}

function removeCard(index) {
    if(confirm("Tem certeza que deseja remover esta carta do seu grimório?")) {
        const char = characters.find(c => c.id === activeCharId);
        char.deck.splice(index, 1);
        saveToStorage();
        renderDeck();
    }
}

function openLibrary() {
    const char = characters.find(c => c.id === activeCharId);
    if (!char.class) { alert("Selecione uma classe primeiro!"); return; }
    const domains = classDomains[char.class];
    const maxLevel = document.getElementById('filter-level').value;
    const listEl = document.getElementById('library-list');
    listEl.innerHTML = '';
    domains.forEach(domainKey => {
        if (fullData[domainKey]) {
            const cards = fullData[domainKey].filter(c => c.nivel <= maxLevel);
            cards.forEach(c => {
                const isOwned = char.deck.some(d => d.name === c.nome);
                const item = document.createElement('div');
                item.className = `rpg-card ${isOwned ? 'card-owned' : ''}`;
                item.style.cursor = 'pointer'; 
                item.innerHTML = `<img src="${API_BASE_URL}/images/${c.img}" alt="${c.nome}" onerror="this.src='https://placehold.co/400x600/2a2a2a/c0a062?text=${encodeURIComponent(c.nome)}'">`;
                if (isOwned) { item.title = "Clique para Remover"; item.onclick = () => toggleCardInDeck(c, domainKey, true); } 
                else { item.title = "Clique para Adicionar"; item.onclick = () => toggleCardInDeck(c, domainKey, false); }
                listEl.appendChild(item);
            });
        }
    });
    document.getElementById('library-modal').showModal();
}

function toggleCardInDeck(cardData, domainName, shouldRemove) {
    const char = characters.find(c => c.id === activeCharId);
    if (shouldRemove) {
        char.deck = char.deck.filter(c => c.name !== cardData.nome);
    } else {
        if (char.deck.some(c => c.name === cardData.nome)) return;
        char.deck.push({ name: cardData.nome, img: cardData.img, level: cardData.nivel, domain: domainName, status: 'active' });
    }
    saveToStorage();
    renderDeck();
    openLibrary(); 
}

// ==========================================
// 7. LÓGICA DAS ABAS INTERNAS E EVENTOS
// ==========================================
function setupSheetTabs() {
    const buttons = document.querySelectorAll('.sheet-tab-btn');
    const contents = document.querySelectorAll('.sheet-tab-content');

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active de todos
            buttons.forEach(b => b.classList.remove('active'));
            contents.forEach(c => c.classList.remove('active'));

            // Ativa o clicado
            btn.classList.add('active');
            const targetId = btn.getAttribute('data-target');
            document.getElementById(targetId).classList.add('active');
        });
    });
}

function setupEventListeners() {
    // Clicar no Logo volta para a Home
    if(elLogo) elLogo.addEventListener('click', goHome);
    
    // Clicar no botão Voltar também vai pra Home
    if(elBtnBack) elBtnBack.addEventListener('click', goHome);
    
    // Listener do Input Nível (Para atualizar a biblioteca)
    if(elLevel) elLevel.addEventListener('change', (e) => {
        document.getElementById('filter-level').value = e.target.value;
        saveCurrentChar();
    });

    // Inputs Gerais (INCLUINDO OS TEXTAREAS E AGORA EXPERIÊNCIAS/PATAMARES)
    // Omitimos o char-level para evitar duplicação e os inputs de avatar
    const inputs = document.querySelectorAll('input:not(#avatar-upload-input):not(#avatar-url-input):not(#char-level), select, textarea');
    
    inputs.forEach(input => {
        input.addEventListener('change', (e) => {
            if (['char-armor-value', 'char-hp-max', 'char-stress-max'].includes(e.target.id)) {
                saveCurrentChar();
                selectCharacter(activeCharId); 
            } else {
                saveCurrentChar();
            }
        });
    });

    elClass.addEventListener('change', (e) => {
        const className = e.target.value;
        if (classBaseStats[className]) {
            document.getElementById('char-evasion').value = classBaseStats[className].evasion;
            document.getElementById('char-hp-max').value = classBaseStats[className].hp;
            saveCurrentChar();
            selectCharacter(activeCharId);
        }
        setupSubclassDropdown(className, []);
        updateClassDescription(className);
    });

    document.getElementById('btn-delete-char').addEventListener('click', () => document.getElementById('confirm-modal').showModal());
    
    document.getElementById('confirm-yes').addEventListener('click', () => {
        characters = characters.filter(c => c.id !== activeCharId);
        saveToStorage();
        document.getElementById('confirm-modal').close();
        
        // Se excluiu a ficha estando nela, volta pra home. Se estava na home, só recarrega a home.
        if (!elSheetView.classList.contains('hidden')) {
            goHome(); 
        } else {
            renderHome();
        }
    });

    document.getElementById('confirm-no').addEventListener('click', () => document.getElementById('confirm-modal').close());
    document.getElementById('btn-open-library').addEventListener('click', openLibrary);
    document.getElementById('close-library').addEventListener('click', () => document.getElementById('library-modal').close());
    
    const filterLvl = document.getElementById('filter-level');
    if(filterLvl) filterLvl.addEventListener('change', openLibrary);

    // Listener do Botão Salvar dentro do Modal de Avatar
    document.getElementById('btn-save-avatar').addEventListener('click', () => {
        if (!editingAvatarCharId) return;
        const char = characters.find(c => c.id === editingAvatarCharId);
        if (!char) return;

        const fileInput = document.getElementById('avatar-upload-input');
        const urlInput = document.getElementById('avatar-url-input');

        // Se o usuário selecionou um arquivo local
        if (fileInput.files && fileInput.files[0]) {
            const file = fileInput.files[0];
            const reader = new FileReader();

            reader.onload = function(event) {
                // REDIMENSIONANDO A IMAGEM PARA NÃO EXPLODIR O LOCALSTORAGE
                const img = new Image();
                img.onload = function() {
                    const canvas = document.createElement('canvas');
                    const MAX_SIZE = 250; // Tamanho máximo da imagem
                    let width = img.width;
                    let height = img.height;

                    if (width > height) {
                        if (width > MAX_SIZE) {
                            height *= MAX_SIZE / width;
                            width = MAX_SIZE;
                        }
                    } else {
                        if (height > MAX_SIZE) {
                            width *= MAX_SIZE / height;
                            height = MAX_SIZE;
                        }
                    }
                    canvas.width = width;
                    canvas.height = height;
                    const ctx = canvas.getContext('2d');
                    ctx.drawImage(img, 0, 0, width, height);
                    
                    // Salva como uma imagem compactada no objeto char
                    char.avatar = canvas.toDataURL('image/jpeg', 0.8);
                    
                    saveToStorage();
                    renderHome();
                    document.getElementById('avatar-modal').close();
                };
                img.src = event.target.result;
            };
            reader.readAsDataURL(file);
        } 
        // Se ele não enviou arquivo, mas digitou a URL
        else if (urlInput.value.trim() !== "") {
            char.avatar = urlInput.value.trim();
            saveToStorage();
            renderHome();
            document.getElementById('avatar-modal').close();
        } 
        // Se ele clicou em salvar sem preencher nada
        else {
            alert("Por favor, selecione uma imagem do seu dispositivo ou insira um link URL.");
        }
    });
}

document.addEventListener('DOMContentLoaded', init);