// ==========================================
// 1. DADOS ESTÁTICOS (TEXTOS E REGRAS)
// ==========================================
const classDomains = {
    'Bardo': ['Graça', 'Códice'],
    'Druida': ['Sabedoria', 'Arcano'],
    'Guardião': ['Lâmina', 'Valor'],
    'Patrulheiro': ['Sabedoria', 'Valor'],
    'Ladino': ['Meia-Noite', 'Graça'],
    'Serafim': ['Esplendor', 'Valor'],
    'Feiticeiro': ['Arcano', 'Meia-Noite'],
    'Guerreiro': ['Lâmina', 'Falange'],
    'Mago': ['Códice', 'Esplendor'],
    'BloodHunter': ['Blood', 'Lâmina']
};

// Textos do PDF
const classDescriptions = {
    'Bardo': `
        <div class="class-stats-grid">
            <div class="stat-item"><span class="stat-label">Domínios</span><span class="stat-value">Códice e Graça</span></div>
            <div class="stat-item"><span class="stat-label">Evasão</span><span class="stat-value">10</span></div>
            <div class="stat-item"><span class="stat-label">Vida Inicial</span><span class="stat-value">5</span></div>
        </div>
        <div class="ability-block">
            <div class="ability-title">Habilidade de Esperança: Fazer uma Cena</div>
            <p>Gaste 3 Pontos de Esperança para distrair temporariamente um alvo próximo, aplicando uma penalidade de –2 à Dificuldade dele.</p>
        </div>
        <div class="ability-block">
            <div class="ability-title">Habilidade de Classe: Inspiração</div>
            <p>Uma vez por sessão, descreva como você inspira o grupo e forneça a você e seus aliados um Dado de Inspiração. No 1º nível, seu Dado de Inspiração é d6. Um personagem pode rolar o Dado de Inspiração e somar o resultado a um teste, teste de reação ou rolagem de dano, ou para recuperar um número de PF igual ao resultado. No fim de cada sessão, Dados de Inspiração não utilizados são perdidos.</p>
            <p><em>No 5º nível, seu Dado de Inspiração aumenta para d8.</em></p>
        </div>
    `,
    'Druida': `
        <div class="class-stats-grid">
            <div class="stat-item"><span class="stat-label">Domínios</span><span class="stat-value">Arcano e Sabedoria</span></div>
            <div class="stat-item"><span class="stat-label">Evasão</span><span class="stat-value">10</span></div>
            <div class="stat-item"><span class="stat-label">Vida Inicial</span><span class="stat-value">6</span></div>
        </div>
        <div class="ability-block">
            <div class="ability-title">Habilidade de Esperança: Evolução</div>
            <p>Gaste 3 Pontos de Esperança para usar Forma de Fera sem marcar Pontos de Fadiga. Ao fazer isso, aumente um atributo em +1 até sair da Forma de Fera.</p>
        </div>
        <div class="ability-block">
            <div class="ability-title">Habilidade de Classe: Forma de Fera</div>
            <p>Marque 1 Ponto de Fadiga para se transformar magicamente em uma criatura de patamar igual ou menor que o seu na lista de Formas de Fera. Você pode sair dessa forma a qualquer momento. Enquanto estiver transformado, você não pode usar armas ou feitiços das cartas de domínio, mas feitiços conjurados antes da transformação permanecem ativos.</p>
            <p>Você recebe as habilidades da Forma de Fera escolhida, soma o bônus de Evasão dela à sua Evasão e usa o atributo especificado nas estatísticas dela para atacar. Enquanto estiver na Forma de Fera, sua armadura se torna parte de seu corpo e você marca Pontos de Armadura normalmente.</p>
        </div>
        <div class="ability-block">
            <div class="ability-title">Habilidade de Classe: Dádiva da Natureza</div>
            <p>Você pode criar à vontade efeitos sutis e inofensivos envolvendo a natureza, como fazer uma flor crescer rapidamente, invocar uma brisa ou acender uma fogueira.</p>
        </div>
    `,
    'Guardião': `
        <div class="class-stats-grid">
            <div class="stat-item"><span class="stat-label">Domínios</span><span class="stat-value">Valor e Lâmina</span></div>
            <div class="stat-item"><span class="stat-label">Evasão</span><span class="stat-value">9</span></div>
            <div class="stat-item"><span class="stat-label">Vida Inicial</span><span class="stat-value">7</span></div>
        </div>
        <div class="ability-block">
            <div class="ability-title">Habilidade de Esperança: Linha de Frente</div>
            <p>Gaste 3 Pontos de Esperança para recuperar 2 Pontos de Armadura.</p>
        </div>
        <div class="ability-block">
            <div class="ability-title">Habilidade de Classe: Determinação</div>
            <p>Uma vez por descanso longo, você pode ficar Determinado, recebendo um Dado de Determinação (d4 no nível 1). Coloque-o sobre o espaço apropriado na ficha, começando com o número 1. Após fazer uma rolagem de dano que tira 1 ou mais PV de um alvo, aumente o valor do dado em +1. Se o dado ultrapassar seu máximo ou a cena acabar, remova-o.</p>
            <p>Enquanto estiver Determinado:</p>
            <ul>
                <li>Você reduz a gravidade do dano físico em uma categoria;</li>
                <li>Você soma o valor atual do Dado de Determinação às suas rolagens de dano;</li>
                <li>Você não pode ser Imobilizado ou ficar Vulnerável.</li>
            </ul>
            <p><em>No 5º nível, seu Dado de Determinação aumenta para d6.</em></p>
        </div>
    `,
    'Patrulheiro': `
        <div class="class-stats-grid">
            <div class="stat-item"><span class="stat-label">Domínios</span><span class="stat-value">Falange e Sabedoria</span></div>
            <div class="stat-item"><span class="stat-label">Evasão</span><span class="stat-value">12</span></div>
            <div class="stat-item"><span class="stat-label">Vida Inicial</span><span class="stat-value">6</span></div>
        </div>
        <div class="ability-block">
            <div class="ability-title">Habilidade de Esperança: Segurem Eles</div>
            <p>Quando acerta um ataque com uma arma, você pode gastar 3 Pontos de Esperança para usar o mesmo teste contra dois adversários adicionais no alcance.</p>
        </div>
        <div class="ability-block">
            <div class="ability-title">Habilidade de Classe: Marca da Presa</div>
            <p>Gaste 1 Ponto de Esperança e ataque um alvo. Se acertar, cause o dano normal e Marque o alvo. Até o efeito acabar ou você Marcar outra criatura, receba os seguintes benefícios contra o alvo Marcado:</p>
            <ul>
                <li>Você sabe precisamente em que direção ele está;</li>
                <li>Quando causar dano a esse alvo, ele deve marcar 1 Ponto de Fadiga;</li>
                <li>Quando erra um ataque contra ele, você pode encerrar sua Marca da Presa para rolar seus Dados de Dualidade novamente.</li>
            </ul>
        </div>
    `,
    'Ladino': `
        <div class="class-stats-grid">
            <div class="stat-item"><span class="stat-label">Domínios</span><span class="stat-value">Graça e Meia-noite</span></div>
            <div class="stat-item"><span class="stat-label">Evasão</span><span class="stat-value">12</span></div>
            <div class="stat-item"><span class="stat-label">Vida Inicial</span><span class="stat-value">6</span></div>
        </div>
        <div class="ability-block">
            <div class="ability-title">Habilidade de Esperança: Esquiva de Ladino</div>
            <p>Gaste 3 Pontos de Esperança para receber um bônus de +2 na Evasão até o próximo ataque que acertar você. Caso contrário, esse bônus dura até seu próximo descanso.</p>
        </div>
        <div class="ability-block">
            <div class="ability-title">Habilidade de Classe: Oculto</div>
            <p>Sempre que estiver Escondido, em vez disso você fica Oculto. Além dos benefícios de Escondido, enquanto estiver Oculto você permanece sem ser visto mesmo que um adversário se mova para onde normalmente o veria, desde que você fique parado. Ao concluir um movimento dentro da linha de visão de um adversário, ou ao atacar, você deixa de estar Oculto.</p>
        </div>
        <div class="ability-block">
            <div class="ability-title">Habilidade de Classe: Ataque Furtivo</div>
            <p>Quando acertar um ataque enquanto estiver Oculto, ou enquanto um aliado estiver corpo a corpo ao seu alvo, some um número de d6 igual ao seu patamar à rolagem de dano.</p>
            <ul>
                <li>1º nível: +1d6</li>
                <li>2º ao 4º nível: +2d6</li>
                <li>5º ao 7º nível: +3d6</li>
                <li>8º ao 10º nível: +4d6</li>
            </ul>
        </div>
    `,
    'Serafim': `
        <div class="class-stats-grid">
            <div class="stat-item"><span class="stat-label">Domínios</span><span class="stat-value">Valor e Esplendor</span></div>
            <div class="stat-item"><span class="stat-label">Evasão</span><span class="stat-value">9</span></div>
            <div class="stat-item"><span class="stat-label">Vida Inicial</span><span class="stat-value">7</span></div>
        </div>
        <div class="ability-block">
            <div class="ability-title">Habilidade de Esperança: Alicerce da Vida</div>
            <p>Gaste 3 Pontos de Esperança para recuperar 1 Ponto de Vida de um aliado próximo.</p>
        </div>
        <div class="ability-block">
            <div class="ability-title">Habilidade de Classe: Dados de Oração</div>
            <p>No início de cada sessão, role um número de d4 igual ao atributo de conjuração de sua subclasse e coloque-os sobre a ficha. Eles são seus Dados de Oração.</p>
            <p>Você pode gastar qualquer número de Dados de Oração para auxiliar a si mesmo ou um aliado até o alcance distante. Você pode usar o valor de um dado gasto para:</p>
            <ul>
                <li>Reduzir o dano sofrido;</li>
                <li>Somá-lo ao resultado de uma rolagem após ela ser feita;</li>
                <li>Receber um número de Pontos de Esperança igual ao resultado.</li>
            </ul>
            <p>No fim de cada sessão, Dados de Oração não utilizados são perdidos.</p>
        </div>
    `,
    'Feiticeiro': `
        <div class="class-stats-grid">
            <div class="stat-item"><span class="stat-label">Domínios</span><span class="stat-value">Arcano e Meia-noite</span></div>
            <div class="stat-item"><span class="stat-label">Evasão</span><span class="stat-value">10</span></div>
            <div class="stat-item"><span class="stat-label">Vida Inicial</span><span class="stat-value">6</span></div>
        </div>
        <div class="ability-block">
            <div class="ability-title">Habilidade de Esperança: Magia Volátil</div>
            <p>Gaste 3 Pontos de Esperança para rolar novamente uma quantidade qualquer de dados de dano em um ataque que causa dano mágico.</p>
        </div>
        <div class="ability-block">
            <div class="ability-title">Habilidade de Classe: Sentido Arcano</div>
            <p>Você pode sentir a presença de objetos e pessoas com magia quando estão Próximos.</p>
        </div>
        <div class="ability-block">
            <div class="ability-title">Habilidade de Classe: Ilusão Menor</div>
            <p>Faça um teste de conjuração (10). Em um sucesso, você cria uma ilusão visual em alcance Próximo. Ela não pode ultrapassar seu tamanho. Essa ilusão parece convincente a qualquer um que esteja Próximo ou mais distante.</p>
        </div>
        <div class="ability-block">
            <div class="ability-title">Habilidade de Classe: Canalizar Poder Bruto</div>
            <p>Uma vez por descanso longo, você pode colocar uma carta de domínio de sua mão na reserva e escolher entre:</p>
            <ul>
                <li>Receber Pontos de Esperança igual ao nível da carta;</li>
                <li>Aprimorar um feitiço que cause dano, recebendo um bônus na rolagem de dano igual ao dobro do nível da carta.</li>
            </ul>
        </div>
    `,
    'Guerreiro': `
        <div class="class-stats-grid">
            <div class="stat-item"><span class="stat-label">Domínios</span><span class="stat-value">Falange e Lâmina</span></div>
            <div class="stat-item"><span class="stat-label">Evasão</span><span class="stat-value">11</span></div>
            <div class="stat-item"><span class="stat-label">Vida Inicial</span><span class="stat-value">6</span></div>
        </div>
        <div class="ability-block">
            <div class="ability-title">Habilidade de Esperança: Sem Piedade</div>
            <p>Gaste 3 Pontos de Esperança para receber um bônus de +1 em testes de ataque até seu próximo descanso.</p>
        </div>
        <div class="ability-block">
            <div class="ability-title">Habilidade de Classe: Ataque de Oportunidade</div>
            <p>Se um adversário corpo a corpo tentar sair desse alcance, faça um teste de reação usando um atributo à sua escolha contra a Dificuldade dele. Em um sucesso, escolha um efeito; em um sucesso crítico, escolha dois:</p>
            <ul>
                <li>Ele não pode sair de onde está;</li>
                <li>Você causa dano a ele igual ao dano de sua arma principal;</li>
                <li>Você se movimenta com ele.</li>
            </ul>
        </div>
        <div class="ability-block">
            <div class="ability-title">Habilidade de Classe: Treinamento de Combate</div>
            <p>Você ignora o tipo de empunhadura de armas equipadas. Ao causar dano físico, você recebe um bônus igual ao seu nível na rolagem de dano.</p>
        </div>
    `,
    'Mago': `
        <div class="class-stats-grid">
            <div class="stat-item"><span class="stat-label">Domínios</span><span class="stat-value">Códice e Esplendor</span></div>
            <div class="stat-item"><span class="stat-label">Evasão</span><span class="stat-value">11</span></div>
            <div class="stat-item"><span class="stat-label">Vida Inicial</span><span class="stat-value">5</span></div>
        </div>
        <div class="ability-block">
            <div class="ability-title">Habilidade de Esperança: Não Dessa Vez</div>
            <p>Gaste 3 Pontos de Esperança para forçar um adversário distante ou mais próximo a refazer um teste de ataque ou uma rolagem de dano.</p>
        </div>
        <div class="ability-block">
            <div class="ability-title">Habilidade de Classe: Padrões Estranhos</div>
            <p>Escolha um número de 1 a 12. Ao rolar esse número em um Dado do Destino (Dualidade), receba 1 Ponto de Esperança ou recupere 1 Ponto de Fadiga. Você pode mudar o número escolhido durante um descanso longo.</p>
        </div>
        <div class="ability-block">
            <div class="ability-title">Habilidade de Classe: Prestidigitação</div>
            <p>Você pode executar efeitos mágicos sutis e inofensivos à vontade. Por exemplo, você pode mudar a cor de um objeto, criar um cheiro, acender uma vela, fazer um pequeno objeto flutuar, iluminar uma sala ou consertar um objeto pequeno.</p>
        </div>
    `,
    'BloodHunter': `
        <div class="class-stats-grid">
            <div class="stat-item"><span class="stat-label">Domínios</span><span class="stat-value">Blood e Lâmina</span></div>
            <div class="stat-item"><span class="stat-label">Evasão</span><span class="stat-value">10</span></div>
            <div class="stat-item"><span class="stat-label">Vida Inicial</span><span class="stat-value">6</span></div>
        </div>
        <div class="ability-block">
            <div class="ability-title">Habilidade de Esperança: Sacrifício</div>
            <p>Gaste vida para ganhar Esperança ou vice-versa. (Texto do suplemento não disponível no livro básico).</p>
        </div>
        <div class="ability-block">
            <div class="ability-title">Habilidade de Classe: Rito do Sangue</div>
            <p>Imbua sua arma com seu próprio sangue para causar dano elemental extra ao custo de sua vitalidade. (Texto do suplemento não disponível no livro básico).</p>
        </div>
    `
};

// ==========================================
// 2. ELEMENTOS E ESTADO
// ==========================================
const STORAGE_KEY = 'daggerheart_manager_v7';
let characters = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
let activeCharId = null;

const elTabs = document.getElementById('char-tabs');
const elName = document.getElementById('char-name');
const elClass = document.getElementById('char-class');
const elAncestry = document.getElementById('char-ancestry');
const elCommunity = document.getElementById('char-community');
const elDeckSection = document.getElementById('deckbuilder-section');
const elDescription = document.getElementById('class-description-box');

// Elementos do Dropdown Personalizado
const dropdownContainer = document.getElementById('subclass-dropdown');
const dropdownDisplay = document.getElementById('subclass-display');
const dropdownOptions = document.getElementById('subclass-options');

// ==========================================
// 3. INICIALIZAÇÃO
// ==========================================
function init() {
    if (typeof fullData === 'undefined') {
        alert("ERRO: O arquivo 'data.js' não foi carregado.");
        return;
    }

    loadSelectOptions();
    renderTabs();
    
    if (characters.length > 0) {
        selectCharacter(characters[0].id);
    } else {
        createNewCharacter();
    }
    
    setupEventListeners();
}

function loadSelectOptions() {
    // Classes
    elClass.innerHTML = '<option value="">Selecione...</option>';
    Object.keys(classDomains).forEach(cls => {
        elClass.innerHTML += `<option value="${cls}">${cls}</option>`;
    });

    // Ancestralidades
    elAncestry.innerHTML = '<option value="">Selecione...</option>';
    if(fullData.Ancestralidades) {
        fullData.Ancestralidades.forEach(a => {
            elAncestry.innerHTML += `<option value="${a.nome}">${a.nome}</option>`;
        });
    }

    // Comunidades
    elCommunity.innerHTML = '<option value="">Selecione...</option>';
    if(fullData.Comunidades) {
        fullData.Comunidades.forEach(c => {
            elCommunity.innerHTML += `<option value="${c.nome}">${c.nome}</option>`;
        });
    }
}

// ==========================================
// 4. LÓGICA DE PERSONAGEM
// ==========================================
function createNewCharacter() {
    const newChar = {
        id: Date.now(),
        name: '',
        class: '',
        subclass: [], // Array de subclasses
        ancestry: '',
        community: '',
        deck: [],
        level: 1
    };
    characters.push(newChar);
    saveToStorage();
    selectCharacter(newChar.id);
}

function selectCharacter(id) {
    activeCharId = id;
    const char = characters.find(c => c.id === id);
    if (!char) return;

    elName.value = char.name;
    elClass.value = char.class;
    elAncestry.value = char.ancestry;
    elCommunity.value = char.community;

    // Garante que subclass seja um array
    let selectedSubclasses = Array.isArray(char.subclass) ? char.subclass : (char.subclass ? [char.subclass] : []);
    
    setupSubclassDropdown(char.class, selectedSubclasses);
    updateClassDescription(char.class);
    renderOriginCards(char);
    
    renderTabs();
    renderDeck();
    
    if (char.class) elDeckSection.classList.remove('hidden');
    else elDeckSection.classList.add('hidden');
}

function updateClassDescription(className) {
    if (!className || !classDescriptions[className]) {
        elDescription.classList.add('hidden');
        elDescription.innerHTML = '';
        return;
    }
    elDescription.innerHTML = classDescriptions[className];
    elDescription.classList.remove('hidden');
}

// ==========================================
// DROPDOWN CUSTOMIZADO (LÓGICA)
// ==========================================

function setupSubclassDropdown(className, selectedValues = []) {
    dropdownOptions.innerHTML = ''; // Limpa opções

    if (!className) {
        dropdownDisplay.innerText = "Primeiro a Classe...";
        return;
    }

    if (fullData['Sub-Classes']) {
        const subs = fullData['Sub-Classes'].filter(s => s.nome.startsWith(className));
        
        subs.forEach((sub) => {
            const optionDiv = document.createElement('div');
            optionDiv.className = 'option-item';
            if (selectedValues.includes(sub.nome)) {
                optionDiv.classList.add('selected');
            }
            
            optionDiv.innerHTML = `
                <input type="checkbox" ${selectedValues.includes(sub.nome) ? 'checked' : ''}>
                <span>${sub.nome}</span>
            `;

            // Clique na opção (alterna seleção)
            optionDiv.addEventListener('click', (e) => {
                // Previne o evento de fechar o dropdown
                e.stopPropagation();

                const checkbox = optionDiv.querySelector('input');
                const isSelected = !checkbox.checked;
                checkbox.checked = isSelected;
                
                if (isSelected) {
                    optionDiv.classList.add('selected');
                } else {
                    optionDiv.classList.remove('selected');
                }
                
                saveCurrentChar(); // Salva a cada clique
            });

            dropdownOptions.appendChild(optionDiv);
        });
    }
    
    updateSubclassDisplay(selectedValues);
}

function updateSubclassDisplay(selectedValues) {
    if (!selectedValues || selectedValues.length === 0) {
        dropdownDisplay.innerText = "Selecione...";
        return;
    }
    // Mostra as opções selecionadas separadas por vírgula
    // Remove texto redundante para caber melhor (ex: remove "Bardo: ")
    const displayNames = selectedValues.map(val => val.split(':')[1] ? val.split(':')[1].trim() : val);
    dropdownDisplay.innerText = displayNames.join(', ');
}

// Fecha o dropdown se clicar fora
window.addEventListener('click', (e) => {
    if (!dropdownContainer.contains(e.target)) {
        dropdownOptions.classList.add('hidden');
    }
});

// Abre/Fecha ao clicar no header
dropdownDisplay.addEventListener('click', (e) => {
    const char = characters.find(c => c.id === activeCharId);
    if (char && char.class) {
        dropdownOptions.classList.toggle('hidden');
    }
});

// ==========================================
// RENDERIZAÇÃO DAS CARTAS
// ==========================================

function renderOriginCards(char) {
    const container = document.getElementById('origin-cards-container');
    container.innerHTML = '';

    const addStaticCard = (category, itemName) => {
        if (!itemName || !fullData[category]) return;
        const item = fullData[category].find(i => i.nome === itemName);
        if (item) {
            const div = document.createElement('div');
            div.className = 'rpg-card static-card';
            div.innerHTML = `<img src="images/${item.img}" alt="${itemName}" onerror="this.src='https://placehold.co/220x320/333/c0a062?text=${encodeURIComponent(itemName)}'">`;
            container.appendChild(div);
        }
    };

    // Subclasses (Array)
    let subs = Array.isArray(char.subclass) ? char.subclass : (char.subclass ? [char.subclass] : []);
    subs.forEach(subName => addStaticCard('Sub-Classes', subName));

    addStaticCard('Ancestralidades', char.ancestry);
    addStaticCard('Comunidades', char.community);
}

function saveCurrentChar() {
    const char = characters.find(c => c.id === activeCharId);
    if (!char) return;

    char.name = elName.value;
    char.class = elClass.value;

    // Coleta do Dropdown Customizado
    const selectedItems = Array.from(dropdownOptions.querySelectorAll('.option-item.selected span')).map(span => {
        // Precisamos recuperar o valor original completo, pois o display pode estar truncado?
        // Neste caso a lista interna usa o nome completo vindo do JSON, então usamos o innerText do span.
        // O span contém o texto gerado em setupSubclassDropdown: ${sub.nome}
        return span.innerText;
    });
    
    // Correção: Precisamos garantir que pegamos o valor correto que bate com o JSON
    // Como geramos o HTML com o nome completo, o innerText deve bastar.
    // Porém, uma abordagem mais segura é varrer os inputs checked.
    const checkboxes = dropdownOptions.querySelectorAll('input[type="checkbox"]');
    const selectedValues = [];
    // Precisamos correlacionar o input com o valor. 
    // Uma forma melhor é reconstruir o array baseado na lista completa de dados vs o index dos checkboxes
    // Mas, como geramos o HTML dinamicamente, podemos simplesmente refazer a busca.
    
    // REFAZENDO A COLETA DE DADOS DO DROPDOWN PARA SER MAIS ROBUSTA
    const allOptionsDivs = dropdownOptions.querySelectorAll('.option-item');
    // Filtra subclasses da classe atual no JSON para garantir ordem
    const subs = fullData['Sub-Classes'].filter(s => s.nome.startsWith(char.class));
    
    allOptionsDivs.forEach((div, index) => {
        if (div.querySelector('input').checked) {
            selectedValues.push(subs[index].nome);
        }
    });

    char.subclass = selectedValues;
    updateSubclassDisplay(selectedValues);

    char.ancestry = elAncestry.value;
    char.community = elCommunity.value;

    saveToStorage();
    renderTabs();
    renderOriginCards(char);
}

function renderTabs() {
    const btnAdd = document.getElementById('btn-new-char');
    elTabs.innerHTML = '';
    characters.forEach(char => {
        const btn = document.createElement('button');
        btn.className = `tab-btn ${char.id === activeCharId ? 'active' : ''}`;
        btn.innerText = char.name || 'Novo Herói';
        btn.onclick = () => selectCharacter(char.id);
        elTabs.appendChild(btn);
    });
    elTabs.appendChild(btnAdd);
}

function saveToStorage() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(characters));
}

// ==========================================
// 5. DECKBUILDER
// ==========================================

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

    div.innerHTML = `
        <img src="images/${card.img}" alt="${card.name}" onerror="this.src='https://placehold.co/400x600/2a2a2a/c0a062?text=${encodeURIComponent(card.name)}'">
        <div class="card-actions">
            ${moveBtn}
            <button class="btn-trash" onclick="removeCard(${index})" title="Remover do Grimório">${iconTrash}</button>
        </div>
    `;
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
    if (!char.class) {
        alert("Selecione uma classe primeiro!");
        return;
    }

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
                
                item.innerHTML = `<img src="images/${c.img}" alt="${c.nome}" onerror="this.src='https://placehold.co/400x600/2a2a2a/c0a062?text=${encodeURIComponent(c.nome)}'">`;
                
                if (!isOwned) {
                    item.onclick = () => addCardToDeck(c, domainKey);
                    item.title = "Clique para Adicionar";
                    item.style.cursor = "pointer";
                } else {
                    item.title = "Você já possui esta carta";
                }
                listEl.appendChild(item);
            });
        }
    });
    document.getElementById('library-modal').showModal();
}

function addCardToDeck(cardData, domainName) {
    const char = characters.find(c => c.id === activeCharId);
    if (char.deck.some(c => c.name === cardData.nome)) return;
    char.deck.push({
        name: cardData.nome, img: cardData.img, level: cardData.nivel, domain: domainName, status: 'active'
    });
    saveToStorage();
    renderDeck();
    openLibrary();
}

// ==========================================
// 6. EVENT LISTENERS
// ==========================================
function setupEventListeners() {
    document.getElementById('btn-new-char').addEventListener('click', createNewCharacter);
    
    ['char-name', 'char-ancestry', 'char-community'].forEach(id => {
        document.getElementById(id).addEventListener('change', saveCurrentChar);
    });

    elClass.addEventListener('change', (e) => {
        // Reseta subclasses
        setupSubclassDropdown(e.target.value, []);
        updateClassDescription(e.target.value);
        saveCurrentChar();
        if (e.target.value) elDeckSection.classList.remove('hidden');
    });

    document.getElementById('btn-delete-char').addEventListener('click', () => document.getElementById('confirm-modal').showModal());
    
    document.getElementById('confirm-yes').addEventListener('click', () => {
        characters = characters.filter(c => c.id !== activeCharId);
        saveToStorage();
        if (characters.length > 0) selectCharacter(characters[0].id); else createNewCharacter();
        document.getElementById('confirm-modal').close();
    });
    document.getElementById('confirm-no').addEventListener('click', () => document.getElementById('confirm-modal').close());

    document.getElementById('btn-open-library').addEventListener('click', openLibrary);
    document.getElementById('close-library').addEventListener('click', () => document.getElementById('library-modal').close());
    document.getElementById('filter-level').addEventListener('change', openLibrary);
}

document.addEventListener('DOMContentLoaded', init);