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
    'Pugilista': ['Valor', 'Falange']
};

// Estatísticas Base (Vida e Evasão por classe)
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
    'BloodHunter': { evasion: 10, hp: 6 },
    'Pugilista': { evasion: 10, hp: 6 }
};

// Textos do PDF Completos
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
    `,
    'Pugilista': `
        <div class="class-stats-grid">
            <div class="stat-item"><span class="stat-label">Domínios</span><span class="stat-value">Valor e Falange</span></div>
            <div class="stat-item"><span class="stat-label">Evasão</span><span class="stat-value">10</span></div>
            <div class="stat-item"><span class="stat-label">Vida Inicial</span><span class="stat-value">6</span></div>
        </div>
        <div class="ability-block">
            <div class="ability-title">Habilidade de Esperança: Golpe Atordoante</div>
            <p>Gaste 3 de Esperança quando tiver sucesso em um ataque para Atordoar temporariamente seu alvo e forçá-lo a marcar 1 PF. Enquanto Atordoado, ele tem desvantagem nas rolagens de ataque.</p>
        </div>
        <div class="ability-block">
            <div class="ability-title">Habilidade de Classe: EU SOU A ARMA</div>
            <p>Enquando não tiver nenhuma arma equipada , você tem:

            Bônus de +1 na sua Evasão.

            Seus ataques desarmados são considerados uma arma corpo a corpo use o atributo que quiser. O ataque causa d8+d6 de dano físico usando sua Proficiência</p>
        </div>
        <div class="ability-block">
            <div class="ability-title">COMBO STRIKES d4 ◯ d6 ◯ d8 ◯ d10 ◯</div>
            <p>Depois de fazer uma rolagem de ataque com uma arma de Corpo-a-Corpo mas antes de causar dano ao oponente, gaste 1 PF para iniciar um Combo. Quando fizer isso, role seu Dado de Combo e anote o valor. Então role de novo seu Dado de Combo. Se o valor da segunda rolagem for igual ou maior que sua primeira rolagem, continue rolando até que a rolagem no seu Dado de Combo seja menor que o valor da rolagem imediatamente anterior. Some o valor de todas as rolagens que conseguiu e adicione o total ao dano da sua arma. Estes valores não podem ser ajustados por efeitos que afetem dados de dano.

            Seu Dado de Combo começa como d4. Quando subir de nível, uma vez por patamar você pode usar uma de suas opções de aprimoramento para aumentar seu Dado de Combo.</p>
        </div>
    `
};

// ==========================================
// 2. ELEMENTOS E ESTADO
// ==========================================
const STORAGE_KEY = 'daggerheart_manager_v9_full';
let characters = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
let activeCharId = null;

// Referências DOM
const elTabs = document.getElementById('char-tabs');
const elName = document.getElementById('char-name');
const elClass = document.getElementById('char-class');
// Dropdown personalizado:
const elDropdownContainer = document.getElementById('subclass-dropdown'); 
const elDropdownDisplay = document.getElementById('subclass-display');   
const elDropdownOptions = document.getElementById('subclass-options');   

const elAncestry = document.getElementById('char-ancestry');
const elCommunity = document.getElementById('char-community');
const elTransformation = document.getElementById('char-transformation');
const elDeckSection = document.getElementById('deckbuilder-section');
const elDescription = document.getElementById('class-description-box');

// ==========================================
// 3. INICIALIZAÇÃO
// ==========================================
function init() {
    if (typeof fullData === 'undefined') {
        alert("ERRO: 'data.js' não encontrado.");
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
    elClass.innerHTML = '<option value="">Selecione...</option>';
    Object.keys(classDomains).forEach(cls => {
        elClass.innerHTML += `<option value="${cls}">${cls}</option>`;
    });

    elAncestry.innerHTML = '<option value="">Selecione...</option>';
    if(fullData.Ancestralidades) {
        fullData.Ancestralidades.forEach(a => {
            elAncestry.innerHTML += `<option value="${a.nome}">${a.nome}</option>`;
        });
    }

    elCommunity.innerHTML = '<option value="">Selecione...</option>';
    if(fullData.Comunidades) {
        fullData.Comunidades.forEach(c => {
            elCommunity.innerHTML += `<option value="${c.nome}">${c.nome}</option>`;
        });
    }
    // Transformações
    const elTransformation = document.getElementById('char-transformation');
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
    const newChar = {
        id: Date.now(),
        name: '', class: '', subclass: [], ancestry: '', community: '', transformation: '',
        stats: { agility: 0, strength: 0, finesse: 0, instinct: 0, presence: 0, knowledge: 0 },
        
        // ESTRUTURA DE COMBATE
        combat: {
            evasion: 10,
            armorValue: 0,      // Número no Input
            armorMarks: [],     // Array de booleanos para os slots
            thresholds: { major: 0, severe: 0 },
            hopeMarks: [],      // Slots de Esperança
            hpMax: 6,
            hpMarks: [],        // Slots de Dano
            stressMax: 6,
            stressMarks: []     // Slots de Estresse
        },

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

    // Campos Básicos
    elName.value = char.name || '';
    elClass.value = char.class || '';
    elAncestry.value = char.ancestry || '';
    elCommunity.value = char.community || '';
    const elTrans = document.getElementById('char-transformation');
    if(elTrans) elTrans.value = char.transformation || '';

    // Atributos
    const s = char.stats || { agility:0, strength:0, finesse:0, instinct:0, presence:0, knowledge:0 };
    document.getElementById('stat-agility').value = s.agility;
    document.getElementById('stat-strength').value = s.strength;
    document.getElementById('stat-finesse').value = s.finesse;
    document.getElementById('stat-instinct').value = s.instinct;
    document.getElementById('stat-presence').value = s.presence;
    document.getElementById('stat-knowledge').value = s.knowledge;

    // --- COMBATE (GARANTIA DE CARREGAMENTO) ---
    // Se faltar dados no save antigo, usa padrão
    const c = char.combat || { 
        evasion: 10, armorValue: 0, armorMarks: [], 
        thresholds: { major:0, severe:0 }, hopeMarks: [], 
        hpMax: 6, hpMarks: [], stressMax: 6, stressMarks: [] 
    };

    document.getElementById('char-evasion').value = c.evasion;
    
    // Armadura
    document.getElementById('char-armor-value').value = c.armorValue;
    renderResourceSlots('armor-slots-display', c.armorValue, c.armorMarks);

    // Limiares
    document.getElementById('thresh-major-val').value = c.thresholds.major;
    document.getElementById('thresh-severe-val').value = c.thresholds.severe;

    // Esperança (Sempre 6)
    renderResourceSlots('hope-slots-display', 6, c.hopeMarks);

    // PV
    document.getElementById('char-hp-max').value = c.hpMax;
    renderResourceSlots('hp-slots-display', c.hpMax, c.hpMarks);

    // Estresse
    document.getElementById('char-stress-max').value = c.stressMax;
    renderResourceSlots('stress-slots-display', c.stressMax, c.stressMarks);
    // --------------------------------------------

    let selectedSubclasses = Array.isArray(char.subclass) ? char.subclass : (char.subclass ? [char.subclass] : []);
    setupSubclassDropdown(char.class, selectedSubclasses);
    
    updateClassDescription(char.class);
    renderOriginCards(char);
    renderTabs();
    renderDeck();
    
    if (char.class) elDeckSection.classList.remove('hidden');
    else elDeckSection.classList.add('hidden');
}

// --- FUNÇÃO AUXILIAR DE RENDERIZAÇÃO DE SLOTS ---
function renderResourceSlots(containerId, count, marksArray = []) {
    const container = document.getElementById(containerId);
    if(!container) return;
    container.innerHTML = '';

    count = parseInt(count) || 0; // Segurança

    for (let i = 0; i < count; i++) {
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'custom-checkbox';
        
        // Recupera estado salvo
        if (marksArray[i] === true) {
            checkbox.checked = true;
        }

        // Salva ao clicar
        checkbox.addEventListener('change', saveCurrentChar);
        container.appendChild(checkbox);
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
    elDropdownOptions.innerHTML = ''; 

    if (!className) {
        elDropdownDisplay.innerText = "Primeiro a Classe...";
        return;
    }

    if (fullData['Sub-Classes']) {
        const subs = fullData['Sub-Classes'].filter(s => s.nome.startsWith(className));
        
        if(subs.length === 0) {
             elDropdownDisplay.innerText = "Nenhuma subclasse encontrada";
        }

        subs.forEach((sub) => {
            const optionDiv = document.createElement('div');
            optionDiv.className = 'option-item';
            
            const isChecked = selectedValues.includes(sub.nome);
            if (isChecked) optionDiv.classList.add('selected');

            optionDiv.innerHTML = `
                <input type="checkbox" value="${sub.nome}" ${isChecked ? 'checked' : ''}>
                <span>${sub.nome}</span>
            `;

            optionDiv.addEventListener('click', (e) => {
                e.stopPropagation(); 

                const checkbox = optionDiv.querySelector('input');
                const newState = !checkbox.checked; 
                checkbox.checked = newState;
                
                if (newState) {
                    optionDiv.classList.add('selected');
                } else {
                    optionDiv.classList.remove('selected');
                }
                
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

window.addEventListener('click', (e) => {
    if (elDropdownContainer && !elDropdownContainer.contains(e.target)) {
        elDropdownOptions.classList.add('hidden');
    }
});

if (elDropdownDisplay) {
    elDropdownDisplay.addEventListener('click', (e) => {
        const char = characters.find(c => c.id === activeCharId);
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
            div.innerHTML = `<img src="images/${item.img}" alt="${itemName}" onerror="this.src='https://placehold.co/220x320/333/c0a062?text=${encodeURIComponent(itemName)}'">`;
            container.appendChild(div);
        }
    };

    // ORDEM INVERTIDA (Comunidade -> Ancestralidade -> Subclasse)
    addStaticCard('Comunidades', char.community);
    addStaticCard('Ancestralidades', char.ancestry);

    if (char.transformation) {
        addStaticCard('Transformacoes', char.transformation);
    }

    let subs = Array.isArray(char.subclass) ? char.subclass : (char.subclass ? [char.subclass] : []);
    subs.forEach(subName => addStaticCard('Sub-Classes', subName));
}

function saveCurrentChar() {
    const char = characters.find(c => c.id === activeCharId);
    if (!char) return;

    char.name = elName.value;
    char.class = elClass.value;
    char.ancestry = elAncestry.value;
    char.community = elCommunity.value;
    const elTrans = document.getElementById('char-transformation');
    if(elTrans) char.transformation = elTrans.value;

    // Dropdown
    const checkboxes = elDropdownOptions.querySelectorAll('input[type="checkbox"]:checked');
    const selectedValues = Array.from(checkboxes).map(cb => cb.value);
    char.subclass = selectedValues;
    updateSubclassDisplay(selectedValues);

    // Atributos
    char.stats = {
        agility: document.getElementById('stat-agility').value,
        strength: document.getElementById('stat-strength').value,
        finesse: document.getElementById('stat-finesse').value,
        instinct: document.getElementById('stat-instinct').value,
        presence: document.getElementById('stat-presence').value,
        knowledge: document.getElementById('stat-knowledge').value
    };

    // --- COLETA DE COMBATE ---
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
                item.style.cursor = 'pointer'; 
                
                item.innerHTML = `<img src="images/${c.img}" alt="${c.nome}" onerror="this.src='https://placehold.co/400x600/2a2a2a/c0a062?text=${encodeURIComponent(c.nome)}'">`;
                
                if (isOwned) {
                    item.title = "Clique para Remover";
                    item.onclick = () => toggleCardInDeck(c, domainKey, true);
                } else {
                    item.title = "Clique para Adicionar";
                    item.onclick = () => toggleCardInDeck(c, domainKey, false);
                }

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
        
        char.deck.push({
            name: cardData.nome, 
            img: cardData.img, 
            level: cardData.nivel, 
            domain: domainName, 
            status: 'active'
        });
    }

    saveToStorage();
    renderDeck();
    openLibrary(); 
}

// ==========================================
// 7. EVENT LISTENERS
// ==========================================

function setupEventListeners() {
    document.getElementById('btn-new-char').addEventListener('click', createNewCharacter);
    
    // Inputs Gerais
    const inputs = document.querySelectorAll('input:not(.custom-checkbox), select');
    inputs.forEach(input => {
        input.addEventListener('change', (e) => {
            // Se mudou um valor que define quantidade de slots (Armadura, HP, Stress)
            // Precisamos salvar E redesenhar os slots
            if (['char-armor-value', 'char-hp-max', 'char-stress-max'].includes(e.target.id)) {
                saveCurrentChar();
                selectCharacter(activeCharId); // Força redesenho
            } else {
                saveCurrentChar();
            }
        });
    });

    elClass.addEventListener('change', (e) => {
        const className = e.target.value;
        
        // Auto-preencher Stats se for uma nova classe
        if (classBaseStats[className]) {
            document.getElementById('char-evasion').value = classBaseStats[className].evasion;
            document.getElementById('char-hp-max').value = classBaseStats[className].hp;
            
            // Salva e recarrega para mostrar os slots de HP corretos
            saveCurrentChar();
            selectCharacter(activeCharId);
        }
        
        setupSubclassDropdown(className, []);
        updateClassDescription(className);
        
        if (className) {
            elDeckSection.classList.remove('hidden');
        } else {
            elDeckSection.classList.add('hidden');
        }
    });

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

    document.getElementById('btn-open-library').addEventListener('click', openLibrary);
    document.getElementById('close-library').addEventListener('click', () => {
        document.getElementById('library-modal').close();
    });
    document.getElementById('filter-level').addEventListener('change', openLibrary);
}

// INICIAR APP
document.addEventListener('DOMContentLoaded', init);