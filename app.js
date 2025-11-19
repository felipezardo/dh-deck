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
    'BloodHunter': ['Blood', 'Lâmina']
};

// Textos do PDF (Atualizados conforme seu envio)
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
            <div class="ability-title">Habilidade de Esperança: Maldição de Sangue</div>
            <p>Gaste 3 de Esperança para marcar uma criatura dentro do alcance Distante ou em uma visão da sua Psicometria Sombria. Até que você termine um descanso, sofra dano Severo, ou use esta característica novamente, você tem vantagem em todas as rolagens de ação contra o alvo.</p>
        </div>
        <div class="ability-block">
            <div class="ability-title">Habilidade de Classe: Rito Carmesim</div>
            <p>Você pode encantar seus golpes com poder sanguinário ao custo de sua vitalidade. Marque 1 PV para encantar uma de suas armas ativas. Até que você termine seu próximo descanso, essa arma causa dano físico ou mágico (escolha quando usar esta característica) e um1d6 de dano extra quando você acerta com ela. Este dano extra aumenta para2d6 no nível 5 e 3d6 no nível 8.</p>
        </div>
        <div class="ability-block">
            <div class="ability-title">Habilidade de Classe: Psicometria Sombria</div>
            <p>Enquanto inspeciona uma criatura, um local ou um objeto em alcance Muito Próximo, faça um Teste de Conjuração (12). Em um sucesso, marque 1 PF para ter uma visão da violência mais recente envolvendo o alvo, e até que você termine um descanso, você tem vantagem em qualquer rolagem de ação para relembrar conhecimento sobre coisas na visão.</p>
        </div>
    `
};

// ==========================================
// 2. ELEMENTOS E ESTADO
// ==========================================
const STORAGE_KEY = 'daggerheart_manager_v7';
let characters = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
let activeCharId = null;

// Referências DOM
const elTabs = document.getElementById('char-tabs');
const elName = document.getElementById('char-name');
const elClass = document.getElementById('char-class');
// Dropdown personalizado:
const elDropdownContainer = document.getElementById('subclass-dropdown'); // a div wrapper
const elDropdownDisplay = document.getElementById('subclass-display');   // o texto que aparece
const elDropdownOptions = document.getElementById('subclass-options');   // a lista oculta

const elAncestry = document.getElementById('char-ancestry');
const elCommunity = document.getElementById('char-community');
const elDeckSection = document.getElementById('deckbuilder-section');
const elDescription = document.getElementById('class-description-box');

// ==========================================
// 3. INICIALIZAÇÃO
// ==========================================
function init() {
    // Verificação de segurança
    if (typeof fullData === 'undefined') {
        alert("ERRO: 'data.js' não encontrado. Verifique se ele está na mesma pasta e carregado antes do app.js.");
        return;
    }

    loadSelectOptions();
    renderTabs();
    
    // Tenta carregar o primeiro personagem ou cria um novo se estiver vazio
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
    if (fullData.Ancestralidades) {
        fullData.Ancestralidades.forEach(a => {
            elAncestry.innerHTML += `<option value="${a.nome}">${a.nome}</option>`;
        });
    }

    // Comunidades
    elCommunity.innerHTML = '<option value="">Selecione...</option>';
    if (fullData.Comunidades) {
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
        subclass: [], // Array vazio para múltiplas subclasses
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

    // Preencher Campos Básicos
    elName.value = char.name || '';
    elClass.value = char.class || '';
    elAncestry.value = char.ancestry || '';
    elCommunity.value = char.community || '';

    // Garante que subclass seja um array (retrocompatibilidade)
    let selectedSubclasses = Array.isArray(char.subclass) ? char.subclass : (char.subclass ? [char.subclass] : []);

    // Reconstrói a UI de Subclasses e marca os itens salvos
    setupSubclassDropdown(char.class, selectedSubclasses);
    
    // Atualiza o resto da tela
    updateClassDescription(char.class);
    renderOriginCards(char);
    renderTabs();
    renderDeck();
    
    // Mostrar/Esconder Deckbuilder
    if (char.class) {
        elDeckSection.classList.remove('hidden');
    } else {
        elDeckSection.classList.add('hidden');
    }
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
// 4.1 LÓGICA DO DROPDOWN DE SUBCLASSES
// ==========================================

function setupSubclassDropdown(className, selectedValues = []) {
    // Limpa as opções antigas
    elDropdownOptions.innerHTML = ''; 

    // Se não tem classe selecionada, reseta e sai
    if (!className) {
        elDropdownDisplay.innerText = "Primeiro a Classe...";
        // Desabilitar visualmente se quiser (opcional)
        return;
    }

    // Filtra subclasses disponíveis no data.js para a classe escolhida
    if (fullData['Sub-Classes']) {
        const subs = fullData['Sub-Classes'].filter(s => s.nome.startsWith(className));
        
        if(subs.length === 0) {
             elDropdownDisplay.innerText = "Nenhuma subclasse encontrada";
        }

        subs.forEach((sub) => {
            // Cria o item da lista
            const optionDiv = document.createElement('div');
            optionDiv.className = 'option-item';
            
            // Verifica se esta opção está salva no array do personagem
            const isChecked = selectedValues.includes(sub.nome);
            
            if (isChecked) {
                optionDiv.classList.add('selected');
            }

            // O Input guarda o valor para salvamento
            optionDiv.innerHTML = `
                <input type="checkbox" value="${sub.nome}" ${isChecked ? 'checked' : ''}>
                <span>${sub.nome}</span>
            `;

            // Evento de Clique na opção inteira
            optionDiv.addEventListener('click', (e) => {
                e.stopPropagation(); // Não fecha o menu

                const checkbox = optionDiv.querySelector('input');
                const newState = !checkbox.checked; // Inverte estado
                checkbox.checked = newState;
                
                if (newState) {
                    optionDiv.classList.add('selected');
                } else {
                    optionDiv.classList.remove('selected');
                }
                
                // Salva imediatamente após clicar
                saveCurrentChar(); 
            });

            elDropdownOptions.appendChild(optionDiv);
        });
    }
    
    // Atualiza o texto de exibição (ex: "Trovador, Beletrista")
    updateSubclassDisplay(selectedValues);
}

function updateSubclassDisplay(selectedValues) {
    if (!selectedValues || selectedValues.length === 0) {
        elDropdownDisplay.innerText = "Selecione...";
        return;
    }
    // Formatação visual: remove o prefixo da classe para ficar mais limpo (opcional)
    // Ex: "Bardo: Trovador" vira "Trovador"
    const displayNames = selectedValues.map(val => {
        const parts = val.split(':');
        return parts.length > 1 ? parts[1].trim() : val;
    });
    
    elDropdownDisplay.innerText = displayNames.join(', ');
}

// Lógica para fechar o dropdown ao clicar fora
window.addEventListener('click', (e) => {
    // Se o clique NÃO for dentro do container do dropdown
    if (elDropdownContainer && !elDropdownContainer.contains(e.target)) {
        elDropdownOptions.classList.add('hidden');
    }
});

// Lógica para abrir/fechar ao clicar no cabeçalho
if (elDropdownDisplay) {
    elDropdownDisplay.addEventListener('click', (e) => {
        const char = characters.find(c => c.id === activeCharId);
        // Só abre se tiver classe selecionada
        if (char && char.class) {
            elDropdownOptions.classList.toggle('hidden');
        }
    });
}

// ==========================================
// 5. RENDERIZAÇÃO DAS CARTAS (ORIGEM E DECK)
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
            // Usa imagem ou placeholder
            div.innerHTML = `<img src="images/${item.img}" alt="${itemName}" onerror="this.src='https://placehold.co/220x320/333/c0a062?text=${encodeURIComponent(itemName)}'">`;
            container.appendChild(div);
        }
    };

    // Renderiza todas as subclasses selecionadas
    let subs = Array.isArray(char.subclass) ? char.subclass : (char.subclass ? [char.subclass] : []);
    subs.forEach(subName => addStaticCard('Sub-Classes', subName));

    addStaticCard('Ancestralidades', char.ancestry);
    addStaticCard('Comunidades', char.community);
}

function saveCurrentChar() {
    const char = characters.find(c => c.id === activeCharId);
    if (!char) return;

    // Salva campos básicos
    char.name = elName.value;
    char.class = elClass.value;
    char.ancestry = elAncestry.value;
    char.community = elCommunity.value;

    // --- SALVAMENTO DO DROPDOWN CORRIGIDO ---
    // Busca todos os checkboxes marcados DENTRO da lista de opções
    const checkboxes = elDropdownOptions.querySelectorAll('input[type="checkbox"]:checked');
    // Mapeia para um array de strings (valores)
    const selectedValues = Array.from(checkboxes).map(cb => cb.value);
    
    char.subclass = selectedValues;
    updateSubclassDisplay(selectedValues);
    // ----------------------------------------

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
        // Nome padrão se estiver vazio
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
// 6. DECKBUILDER (LÓGICA)
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
        <img src="images/${card.img}" alt="${card.name}" onerror="this.src='https://placehold.co/220x320/333/c0a062?text=${encodeURIComponent(card.name)}'">
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
                
                item.innerHTML = `<img src="images/${c.img}" alt="${c.nome}" onerror="this.src='https://placehold.co/220x320/333/c0a062?text=${encodeURIComponent(c.nome)}'">`;
                
                if (!isOwned) {
                    item.style.cursor = 'pointer';
                    item.onclick = () => addCardToDeck(c, domainKey);
                    item.title = "Clique para Adicionar";
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
        name: cardData.nome,
        img: cardData.img,
        level: cardData.nivel,
        domain: domainName,
        status: 'active'
    });

    saveToStorage();
    renderDeck();
    openLibrary();
}

// ==========================================
// 7. EVENT LISTENERS
// ==========================================

function setupEventListeners() {
    // Botão Novo Personagem
    document.getElementById('btn-new-char').addEventListener('click', createNewCharacter);
    
    // Campos de Texto/Select Simples
    ['char-name', 'char-ancestry', 'char-community'].forEach(id => {
        document.getElementById(id).addEventListener('change', saveCurrentChar);
    });

    // Listener Especial para Classe
    elClass.addEventListener('change', (e) => {
        // Quando troca a classe, reinicia as subclasses (array vazio)
        // e reconstrói o dropdown para a nova classe
        setupSubclassDropdown(e.target.value, []);
        updateClassDescription(e.target.value);
        saveCurrentChar();
        
        if (e.target.value) {
            elDeckSection.classList.remove('hidden');
        } else {
            elDeckSection.classList.add('hidden');
        }
    });

    // Botões de Exclusão
    document.getElementById('btn-delete-char').addEventListener('click', () => {
        document.getElementById('confirm-modal').showModal();
    });

    document.getElementById('confirm-yes').addEventListener('click', () => {
        characters = characters.filter(c => c.id !== activeCharId);
        saveToStorage();
        
        if (characters.length > 0) {
            selectCharacter(characters[0].id);
        } else {
            createNewCharacter();
        }
        document.getElementById('confirm-modal').close();
    });

    document.getElementById('confirm-no').addEventListener('click', () => {
        document.getElementById('confirm-modal').close();
    });

    // Biblioteca
    document.getElementById('btn-open-library').addEventListener('click', openLibrary);
    document.getElementById('close-library').addEventListener('click', () => {
        document.getElementById('library-modal').close();
    });
    document.getElementById('filter-level').addEventListener('change', openLibrary);
}

// INICIAR APP
document.addEventListener('DOMContentLoaded', init);