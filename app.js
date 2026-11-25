/**
 * Výchozí data pro TJ Kobylisy (A a B tým)
 */
const DEFAULT_DATA = {
    teams: {
        teamA: {
            id: 'teamA',
            name: 'TJ Kobylisy A',
            competition: 'Pražský přebor',
            players: [
                { id: 'a1', rank: 1, name: 'IM Karel Novák', elo: 2345, status: 'kmenovy', isCaptain: false },
                { id: 'a2', rank: 2, name: 'FM Petr Svoboda', elo: 2280, status: 'host', isCaptain: false },
                { id: 'a3', rank: 3, name: 'Michael Berger', elo: 2140, status: 'kmenovy', isCaptain: true },
                { id: 'a4', rank: 4, name: 'Martin Dvořák', elo: 2095, status: 'kmenovy', isCaptain: false },
                { id: 'a5', rank: 5, name: 'Andrej Kovalenko', elo: 2060, status: 'cizinec', isCaptain: false },
                { id: 'a6', rank: 6, name: 'Jakub Černý', elo: 2015, status: 'kmenovy', isCaptain: false },
                { id: 'a7', rank: 7, name: 'Tomáš Procházka', elo: 1980, status: 'kmenovy', isCaptain: false },
                { id: 'a8', rank: 8, name: 'Lukáš Kučera', elo: 1945, status: 'host', isCaptain: false },
                { id: 'a9', rank: 9, name: 'Ondřej Veselý', elo: 1910, status: 'kmenovy', isCaptain: false },
                { id: 'a10', rank: 10, name: 'David Horák', elo: 1875, status: 'kmenovy', isCaptain: false },
                { id: 'a11', rank: 11, name: 'Filip Marek', elo: 1830, status: 'kmenovy', isCaptain: false },
                { id: 'a12', rank: 12, name: 'Jan Pospíšil', elo: 1790, status: 'kmenovy', isCaptain: false }
            ],
            matches: [
                {
                    id: 'mA4',
                    round: '4. kolo',
                    opponent: 'ŠK Smíchov A',
                    date: 'Neděle 6. 12. 2026',
                    time: '10:00',
                    venue: 'Doma',
                    address: 'Klubovna TJ Kobylisy, U Školské zahrady',
                    attendance: {
                        a1: 'yes', a2: 'yes', a3: 'yes', a4: 'no',
                        a5: 'yes', a6: 'yes', a7: 'maybe', a8: 'yes',
                        a9: 'yes', a10: 'unknown', a11: 'no', a12: 'maybe'
                    },
                    // Přednastavená platná sestava 8 hráčů podle pořadí
                    lineup: ['a1', 'a2', 'a3', 'a5', 'a6', 'a8', 'a9', 'a7']
                },
                {
                    id: 'mA5',
                    round: '5. kolo',
                    opponent: 'ŠK Duras BVK Praha',
                    date: 'Neděle 20. 12. 2026',
                    time: '10:00',
                    venue: 'Venku',
                    address: 'Hrací místnost Duras, Praha 6',
                    attendance: {
                        a1: 'maybe', a2: 'no', a3: 'yes', a4: 'yes',
                        a5: 'yes', a6: 'unknown', a7: 'yes', a8: 'yes',
                        a9: 'unknown', a10: 'yes', a11: 'yes', a12: 'unknown'
                    },
                    lineup: ['a3', 'a4', 'a5', 'a7', 'a8', 'a10', 'a11', '']
                }
            ]
        },
        teamB: {
            id: 'teamB',
            name: 'TJ Kobylisy B',
            competition: '1. třída Pražského přeboru',
            players: [
                { id: 'b1', rank: 1, name: 'David Horák', elo: 1875, status: 'kmenovy', isCaptain: false },
                { id: 'b2', rank: 2, name: 'Filip Marek', elo: 1830, status: 'kmenovy', isCaptain: false },
                { id: 'b3', rank: 3, name: 'Michael Berger', elo: 2140, status: 'kmenovy', isCaptain: true },
                { id: 'b4', rank: 4, name: 'Jan Pospíšil', elo: 1790, status: 'kmenovy', isCaptain: false },
                { id: 'b5', rank: 5, name: 'Marek Pokorný', elo: 1755, status: 'kmenovy', isCaptain: false },
                { id: 'b6', rank: 6, name: 'Radek Jelínek', elo: 1720, status: 'host', isCaptain: false },
                { id: 'b7', rank: 7, name: 'Vojtěch Král', elo: 1685, status: 'kmenovy', isCaptain: false },
                { id: 'b8', rank: 8, name: 'Štěpán Beneš', elo: 1650, status: 'kmenovy', isCaptain: false },
                { id: 'b9', rank: 9, name: 'Daniel Fiala', elo: 1610, status: 'kmenovy', isCaptain: false },
                { id: 'b10', rank: 10, name: 'Matěj Sedláček', elo: 1580, status: 'kmenovy', isCaptain: false }
            ],
            matches: [
                {
                    id: 'mB5',
                    round: '5. kolo',
                    opponent: 'Bohemians Praha C',
                    date: 'Neděle 13. 12. 2026',
                    time: '10:00',
                    venue: 'Venku',
                    address: 'KD Barikádníků, Praha 10',
                    attendance: {
                        b1: 'yes', b2: 'yes', b3: 'yes', b4: 'yes',
                        b5: 'no', b6: 'yes', b7: 'yes', b8: 'maybe',
                        b9: 'yes', b10: 'unknown'
                    },
                    lineup: ['b1', 'b2', 'b3', 'b4', 'b6', 'b7', 'b9', 'b8']
                }
            ]
        }
    }
};

const STORAGE_KEY = 'skis_kobylisy_data_v1';

// Stav aplikace
let appData = loadData();
let currentTeamId = 'teamA';
let currentMatchId = 'mA4';
let currentTab = 'dashboard';
let currentRole = 'captain'; // 'captain' nebo 'player'

// Načtení dat z localStorage nebo inicializace výchozích
function loadData() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            return JSON.parse(saved);
        }
    } catch (e) {
        console.error('Chyba při čtení z localStorage:', e);
    }
    return JSON.parse(JSON.stringify(DEFAULT_DATA));
}

// Uložení dat do localStorage
function saveData() {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(appData));
    } catch (e) {
        console.error('Chyba při ukládání do localStorage:', e);
    }
}

// Pomocná funkce pro zobrazení notifikace (místo alert)
function showToast(message, type = 'success') {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    
    const colors = type === 'error' 
        ? 'bg-red-900 text-white border-red-700' 
        : 'bg-gray-900 text-white border-gray-700';

    toast.className = `${colors} border px-4 py-3 rounded-lg shadow-lg text-xs font-medium flex items-center justify-between gap-3 transition-all duration-300`;
    toast.innerHTML = `
        <span>${message}</span>
        <button onclick="this.parentElement.remove()" class="text-gray-400 hover:text-white cursor-pointer">&times;</button>
    `;
    container.appendChild(toast);
    setTimeout(() => {
        if (toast.parentElement) toast.remove();
    }, 3500);
}

// =====================================================================
// PŘIHLÁŠENÍ A ODHLÁŠENÍ
// =====================================================================
const loginForm = document.getElementById('login-form');
const loginError = document.getElementById('login-error');

function performLogin(email, password) {
    if (email.trim().toLowerCase() === 'mail.michael@email.cz' && password === 'heslo') {
        loginError.classList.add('hidden');
        document.getElementById('login-screen').classList.add('hidden');
        document.getElementById('app-screen').classList.remove('hidden');
        renderAll();
        showToast('Vítejte zpět, kapitáne Michaeli Bergere!');
    } else {
        loginError.classList.remove('hidden');
    }
}

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    performLogin(email, password);
});

document.getElementById('quick-demo-login').addEventListener('click', () => {
    document.getElementById('email').value = 'mail.michael@email.cz';
    document.getElementById('password').value = 'heslo';
    performLogin('mail.michael@email.cz', 'heslo');
});

document.getElementById('logout-btn').addEventListener('click', () => {
    document.getElementById('app-screen').classList.add('hidden');
    document.getElementById('login-screen').classList.remove('hidden');
});

// =====================================================================
// PŘEPÍNÁNÍ ROLÍ (KAPITÁN VS. HRÁČ) A ZÁLOŽEK
// =====================================================================
function switchRole(role) {
    currentRole = role;
    const capBtn = document.getElementById('role-captain-btn');
    const plrBtn = document.getElementById('role-player-btn');
    const roleBadge = document.getElementById('role-badge-text');

    if (role === 'captain') {
        capBtn.className = 'px-2.5 py-1 text-xs font-semibold rounded-md transition cursor-pointer bg-gray-900 text-white';
        plrBtn.className = 'px-2.5 py-1 text-xs font-medium rounded-md transition cursor-pointer text-gray-700 hover:text-gray-900';
        roleBadge.textContent = 'Kapitán družstva';
    } else {
        plrBtn.className = 'px-2.5 py-1 text-xs font-semibold rounded-md transition cursor-pointer bg-gray-900 text-white';
        capBtn.className = 'px-2.5 py-1 text-xs font-medium rounded-md transition cursor-pointer text-gray-700 hover:text-gray-900';
        roleBadge.textContent = 'Hráč oddílu';
    }
    renderAll();
}

document.getElementById('role-captain-btn').addEventListener('click', () => switchRole('captain'));
document.getElementById('role-player-btn').addEventListener('click', () => switchRole('player'));

function switchTab(tabName) {
    currentTab = tabName;
    document.querySelectorAll('.nav-tab').forEach(btn => {
        if (btn.dataset.tab === tabName) {
            btn.className = 'nav-tab border-b-2 border-gray-900 text-gray-900 whitespace-nowrap py-3 px-2 text-sm font-semibold flex items-center gap-2 cursor-pointer';
        } else {
            btn.className = 'nav-tab border-b-2 border-transparent text-gray-500 hover:text-gray-800 hover:border-gray-300 whitespace-nowrap py-3 px-2 text-sm font-medium flex items-center gap-2 cursor-pointer';
        }
    });

    document.getElementById('tab-dashboard').classList.toggle('hidden', tabName !== 'dashboard');
    document.getElementById('tab-lineup').classList.toggle('hidden', tabName !== 'lineup');
    document.getElementById('tab-roster').classList.toggle('hidden', tabName !== 'roster');

    renderAll();
}

document.querySelectorAll('.nav-tab').forEach(btn => {
    btn.addEventListener('click', () => switchTab(btn.dataset.tab));
});

document.getElementById('go-to-lineup-btn').addEventListener('click', () => {
    switchTab('lineup');
});

// Přepínání týmu (TJ Kobylisy A / B)
document.querySelectorAll('.team-selector').forEach(btn => {
    btn.addEventListener('click', () => {
        currentTeamId = btn.dataset.team;
        const team = appData.teams[currentTeamId];
        currentMatchId = team.matches[0].id;

        document.querySelectorAll('.team-selector').forEach(b => {
            if (b.dataset.team === currentTeamId) {
                b.className = 'team-selector px-4 py-1.5 text-sm font-semibold rounded-md bg-gray-900 text-white transition cursor-pointer';
            } else {
                b.className = 'team-selector px-4 py-1.5 text-sm font-medium rounded-md text-gray-700 hover:text-gray-900 transition cursor-pointer';
            }
        });

        renderAll();
    });
});

// Reset demo dat
document.getElementById('reset-data-btn').addEventListener('click', () => {
    appData = JSON.parse(JSON.stringify(DEFAULT_DATA));
    saveData();
    currentMatchId = appData.teams[currentTeamId].matches[0].id;
    renderAll();
    showToast('Demo data byla obnovena do výchozího stavu.');
});

// =====================================================================
// VYKRESLOVÁNÍ ZÁPASŮ A DOCHÁZKY (DASHBOARD)
// =====================================================================
function getStatusBadge(status) {
    if (status === 'host') {
        return '<span class="px-2 py-0.5 text-[11px] font-medium rounded border border-gray-400 text-gray-800 bg-gray-100">Host</span>';
    }
    if (status === 'cizinec') {
        return '<span class="px-2 py-0.5 text-[11px] font-medium rounded border border-gray-800 text-gray-900 bg-gray-200">Cizinec</span>';
    }
    return '<span class="px-2 py-0.5 text-[11px] font-normal rounded border border-gray-200 text-gray-600 bg-white">Kmenový</span>';
}

function renderMatchesAndAttendance() {
    const team = appData.teams[currentTeamId];
    const matchesGrid = document.getElementById('matches-grid');
    matchesGrid.innerHTML = '';

    team.matches.forEach(match => {
        const isSelected = match.id === currentMatchId;
        
        // Spočítat potvrzené hráče
        let yesCount = 0;
        let maybeCount = 0;
        team.players.forEach(p => {
            const st = match.attendance[p.id] || 'unknown';
            if (st === 'yes') yesCount++;
            if (st === 'maybe') maybeCount++;
        });

        const card = document.createElement('div');
        card.className = `p-4 rounded-xl border transition cursor-pointer ${
            isSelected 
            ? 'border-2 border-gray-900 bg-gray-50 shadow-sm' 
            : 'border-gray-300 bg-white hover:border-gray-500'
        }`;
        card.onclick = () => {
            currentMatchId = match.id;
            renderAll();
        };

        card.innerHTML = `
            <div class="flex justify-between items-start gap-2 mb-2">
                <div>
                    <span class="text-xs font-bold uppercase tracking-wider text-gray-500">${match.round} • ${team.competition}</span>
                    <h3 class="text-base font-bold text-gray-900 mt-0.5">${team.name} vs. ${match.opponent}</h3>
                </div>
                <span class="px-2.5 py-0.5 text-xs font-semibold rounded ${match.venue === 'Doma' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900 border border-gray-400'}">
                    ${match.venue}
                </span>
            </div>
            <p class="text-xs text-gray-600 mb-3">${match.date} v ${match.time} • ${match.address}</p>
            <div class="pt-2.5 border-t border-gray-200 flex items-center justify-between text-xs">
                <span class="font-semibold ${yesCount >= 8 ? 'text-emerald-800' : 'text-amber-800'}">
                    Potvrzeno: ${yesCount} z 8 hráčů ${maybeCount > 0 ? `(+${maybeCount} možná)` : ''}
                </span>
                <span class="font-medium text-gray-900 underline">${isSelected ? 'Vybráno' : 'Zobrazit detail'}</span>
            </div>
        `;
        matchesGrid.appendChild(card);
    });

    // Vykreslit detail docházky pro vybraný zápas
    const currentMatch = team.matches.find(m => m.id === currentMatchId) || team.matches[0];
    document.getElementById('attendance-match-title').textContent = `Docházka: ${currentMatch.round} – ${team.name} vs. ${currentMatch.opponent}`;
    document.getElementById('attendance-match-badge').textContent = currentMatch.venue;
    document.getElementById('attendance-match-meta').textContent = `${currentMatch.date}, ${currentMatch.time} • ${currentMatch.address}`;

    // Statistiky docházky
    let counts = { yes: 0, maybe: 0, no: 0, unknown: 0 };
    team.players.forEach(p => {
        const s = currentMatch.attendance[p.id] || 'unknown';
        counts[s]++;
    });

    document.getElementById('attendance-stats').innerHTML = `
        <span class="px-2.5 py-1 rounded-md font-semibold bg-emerald-100 text-emerald-900 border border-emerald-300">
            Potvrzeno (Ano): ${counts.yes} z 8
        </span>
        <span class="px-2.5 py-1 rounded-md font-medium bg-amber-50 text-amber-900 border border-amber-300">
            Možná: ${counts.maybe}
        </span>
        <span class="px-2.5 py-1 rounded-md font-medium bg-red-50 text-red-900 border border-red-200">
            Nemůže: ${counts.no}
        </span>
        <span class="px-2.5 py-1 rounded-md font-medium bg-white text-gray-700 border border-gray-300">
            Nevyjádřil se: ${counts.unknown}
        </span>
    `;

    // Zobrazení upozornění v roli hráče
    document.getElementById('player-role-notice').classList.toggle('hidden', currentRole !== 'player');

    // Řádky tabulky docházky
    const tbody = document.getElementById('attendance-table-body');
    tbody.innerHTML = '';

    team.players.forEach(player => {
        const status = currentMatch.attendance[player.id] || 'unknown';
        const isMe = player.name === 'Michael Berger';
        const canEdit = currentRole === 'captain' || isMe;

        const tr = document.createElement('tr');
        tr.className = isMe ? 'bg-gray-50/90' : 'hover:bg-gray-50';

        tr.innerHTML = `
            <td class="py-3 px-4 text-center font-mono font-bold text-gray-900">${player.rank}.</td>
            <td class="py-3 px-4">
                <div class="font-semibold text-gray-900 flex items-center gap-2">
                    <span>${player.name}</span>
                    ${isMe ? '<span class="text-[10px] font-bold uppercase px-1.5 py-0.5 rounded bg-gray-900 text-white">Já</span>' : ''}
                </div>
            </td>
            <td class="py-3 px-4 font-mono text-xs text-gray-700">${player.elo}</td>
            <td class="py-3 px-4">${getStatusBadge(player.status)}</td>
            <td class="py-3 px-4">
                <div class="flex flex-wrap gap-1.5">
                    ${renderAttendanceButtons(player.id, status, canEdit)}
                </div>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

function renderAttendanceButtons(playerId, currentStatus, canEdit) {
    const options = [
        { key: 'yes', label: 'Mohu hrát (Ano)', activeClass: 'bg-emerald-700 text-white border-emerald-800 font-semibold' },
        { key: 'maybe', label: 'Možná / Náhradník', activeClass: 'bg-amber-600 text-white border-amber-700 font-semibold' },
        { key: 'no', label: 'Nemohu (Ne)', activeClass: 'bg-red-700 text-white border-red-800 font-semibold' },
        { key: 'unknown', label: 'Nevyjádřil se', activeClass: 'bg-gray-700 text-white border-gray-800 font-semibold' }
    ];

    return options.map(opt => {
        const isActive = currentStatus === opt.key;
        const baseClass = isActive 
            ? opt.activeClass 
            : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100';
        const disabledAttr = !canEdit ? 'disabled opacity-50 cursor-not-allowed' : 'cursor-pointer';

        return `
            <button type="button" ${!canEdit ? 'disabled' : ''}
                onclick="setPlayerAttendance('${playerId}', '${opt.key}')"
                class="px-2.5 py-1 text-xs rounded-md border transition ${baseClass} ${disabledAttr}">
                ${opt.label}
            </button>
        `;
    }).join('');
}

window.setPlayerAttendance = function(playerId, newStatus) {
    const team = appData.teams[currentTeamId];
    const match = team.matches.find(m => m.id === currentMatchId);
    if (!match) return;

    match.attendance[playerId] = newStatus;
    saveData();
    renderAll();
};

// =====================================================================
// SESTAVOVÁNÍ DRUŽSTVA A AUTOMATICKÝ VALIDÁTOR SOUPISKOVÉHO ŘÁDU
// =====================================================================
function renderLineupBuilder() {
    const team = appData.teams[currentTeamId];
    const select = document.getElementById('lineup-match-select');
    
    // Naplnění selectu zápasů
    select.innerHTML = team.matches.map(m => 
        `<option value="${m.id}" ${m.id === currentMatchId ? 'selected' : ''}>${m.round}: ${team.name} vs. ${m.opponent} (${m.date})</option>`
    ).join('');

    select.onchange = (e) => {
        currentMatchId = e.target.value;
        renderLineupBuilder();
    };

    const match = team.matches.find(m => m.id === currentMatchId) || team.matches[0];
    if (!match.lineup || match.lineup.length !== 8) {
        match.lineup = ['', '', '', '', '', '', '', ''];
    }

    // Read-only banner pro hráče
    const isReadOnly = currentRole === 'player';
    document.getElementById('lineup-readonly-banner').classList.toggle('hidden', !isReadOnly);
    document.getElementById('autofill-lineup-btn').disabled = isReadOnly;
    document.getElementById('autosort-lineup-btn').disabled = isReadOnly;
    document.getElementById('clear-lineup-btn').disabled = isReadOnly;
    document.getElementById('save-lineup-btn').disabled = isReadOnly;

    const container = document.getElementById('boards-container');
    container.innerHTML = '';

    // Spustit validaci pro zjištění konfliktních šachovnic
    const validation = validateLineup(team, match.lineup);

    for (let i = 0; i < 8; i++) {
        const boardNum = i + 1;
        const selectedPlayerId = match.lineup[i];
        const selectedPlayer = team.players.find(p => p.id === selectedPlayerId);
        const hasError = validation.errorBoards.includes(boardNum);

        const row = document.createElement('div');
        row.className = `px-5 py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3 transition ${
            hasError ? 'bg-red-50/80' : (i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50')
        }`;

        // Vytvoření options pro select (seřazeno podle soupisky, se zobrazením docházky)
        const playerOptions = team.players.map(p => {
            const att = match.attendance[p.id] || 'unknown';
            const attText = att === 'yes' ? '✓ Potvrzeno' : (att === 'maybe' ? '? Možná' : (att === 'no' ? '✗ Nemůže' : '• Nevyjádřil se'));
            const statusTag = p.status !== 'kmenovy' ? ` [${p.status.toUpperCase()}]` : '';
            return `<option value="${p.id}" ${p.id === selectedPlayerId ? 'selected' : ''}>
                #${p.rank} ${p.name} (${p.elo})${statusTag} — ${attText}
            </option>`;
        }).join('');

        // Určení barvy figur pro danou šachovnici (Doma: liché bílé, sudé černé; Venku: liché černé, sudé bílé)
        const isHome = match.venue === 'Doma';
        const isWhite = isHome ? (boardNum % 2 === 1) : (boardNum % 2 === 0);
        const colorName = isWhite ? 'Bílé figury' : 'Černé figury';
        const squareClasses = hasError
            ? 'bg-red-700 text-white'
            : (isWhite
                ? 'bg-white text-gray-900 border-2 border-gray-900'
                : 'bg-gray-900 text-white');

        row.innerHTML = `
            <div class="flex items-center gap-3 min-w-[140px]">
                <span class="w-7 h-7 rounded-md flex items-center justify-center text-xs font-bold ${squareClasses}">
                    ${boardNum}.
                </span>
                <div>
                    <span class="text-xs font-bold text-gray-900 block">${boardNum}. šachovnice</span>
                    <span class="text-[11px] text-gray-500">${colorName}</span>
                </div>
            </div>

            <div class="flex-1 flex items-center gap-2">
                <select data-board-index="${i}" ${isReadOnly ? 'disabled' : ''}
                    class="board-select w-full px-3 py-2 text-sm bg-white border ${
                        hasError ? 'border-red-500 ring-1 ring-red-500 text-red-950 font-medium' : 'border-gray-300 text-gray-900'
                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900">
                    <option value="">-- Neobsazeno (Vyberte hráče) --</option>
                    ${playerOptions}
                </select>
                ${selectedPlayer ? `<span class="hidden md:inline-block shrink-0">${getStatusBadge(selectedPlayer.status)}</span>` : ''}
            </div>
        `;
        container.appendChild(row);
    }

    // Posluchače změn na selectech šachovnic
    document.querySelectorAll('.board-select').forEach(sel => {
        sel.addEventListener('change', (e) => {
            const idx = parseInt(e.target.dataset.boardIndex, 10);
            match.lineup[idx] = e.target.value;
            saveData();
            renderLineupBuilder();
        });
    });

    renderValidationPanel(validation);
}

/**
 * JÁDRO VALIDÁTORU SOUPISKOVÉHO ŘÁDU ŠSČR
 */
function validateLineup(team, lineup) {
    const errors = [];
    const warnings = [];
    const errorBoards = new Set();

    const assigned = [];
    let guestsAndForeigners = [];
    const seenIds = new Set();

    lineup.forEach((playerId, index) => {
        const board = index + 1;
        if (!playerId) return;

        const player = team.players.find(p => p.id === playerId);
        if (!player) return;

        // Kontrola duplicity hráče
        if (seenIds.has(playerId)) {
            errors.push(`Duplicitní nasazení: Hráč <strong>${player.name}</strong> je uveden na více šachovnicích současně.`);
            errorBoards.add(board);
        }
        seenIds.add(playerId);

        // Kontrola docházky (varování, pokud hráč napsal "Nemohu")
        const match = team.matches.find(m => m.id === currentMatchId);
        if (match && match.attendance[playerId] === 'no') {
            warnings.push(`Upozornění (šach. ${board}): Hráč <strong>${player.name}</strong> má v docházce uvedeno „Nemohu (Ne)“.`);
        }

        // Sběr hostů a cizinců
        if (player.status === 'host' || player.status === 'cizinec') {
            guestsAndForeigners.push({ board, player });
        }

        assigned.push({ board, player });
    });

    // 1. Kontrola přísně vzestupného pořadí podle soupisky (Soupiskový řád)
    for (let i = 0; i < assigned.length - 1; i++) {
        const current = assigned[i];
        const next = assigned[i + 1];

        if (current.player.rank > next.player.rank) {
            errors.push(
                `Porušení soupiskového řádu: Na <strong>${current.board}. šachovnici</strong> je nasazen <strong>${current.player.name}</strong> (č. ${current.player.rank} na soupisce), ale pod ním na <strong>${next.board}. šachovnici</strong> hraje výše postavený <strong>${next.player.name}</strong> (č. ${next.player.rank}).`
            );
            errorBoards.add(current.board);
            errorBoards.add(next.board);
        }
    }

    // 2. Kontrola maximálního počtu hostů a cizinců (max 2)
    if (guestsAndForeigners.length > 2) {
        const names = guestsAndForeigners.map(g => `${g.player.name} (${g.board}. šach.)`).join(', ');
        errors.push(
            `Překročen limit hostů/cizinců: Nasazeni jsou <strong>${guestsAndForeigners.length} hráči</strong> se statusem Host/Cizinec (povoleny max. 2): ${names}.`
        );
        guestsAndForeigners.forEach(g => errorBoards.add(g.board));
    }

    // 3. Kontrola úplnosti 8 šachovnic
    const emptyBoards = [];
    lineup.forEach((id, idx) => {
        if (!id) emptyBoards.push(idx + 1);
    });
    if (emptyBoards.length > 0) {
        warnings.push(`Nekompletní sestava: Zbývá obsadit <strong>${emptyBoards.length}</strong> šachovnic (${emptyBoards.join('., ')}.).`);
    }

    return {
        isValid: errors.length === 0 && emptyBoards.length === 0,
        hasRuleErrors: errors.length > 0,
        errors,
        warnings,
        errorBoards: Array.from(errorBoards),
        guestsCount: guestsAndForeigners.length,
        filledCount: assigned.length
    };
}

function renderValidationPanel(validation) {
    const card = document.getElementById('validator-card');
    const dot = document.getElementById('validator-status-dot');
    const badge = document.getElementById('validator-badge');
    const messagesDiv = document.getElementById('validator-messages');

    if (validation.hasRuleErrors) {
        card.className = 'border-2 border-red-600 rounded-xl p-5 bg-red-50/40 transition-colors';
        dot.className = 'w-3 h-3 rounded-full bg-red-600 animate-pulse';
        badge.className = 'px-2.5 py-0.5 text-xs font-bold rounded bg-red-600 text-white';
        badge.textContent = 'NEPLATNÁ SESTAVA';
    } else if (!validation.isValid) {
        card.className = 'border-2 border-amber-500 rounded-xl p-5 bg-amber-50/30 transition-colors';
        dot.className = 'w-3 h-3 rounded-full bg-amber-500';
        badge.className = 'px-2.5 py-0.5 text-xs font-bold rounded bg-amber-100 text-amber-900';
        badge.textContent = 'NEÚPLNÁ SESTAVA';
    } else {
        card.className = 'border-2 border-emerald-600 rounded-xl p-5 bg-emerald-50/30 transition-colors';
        dot.className = 'w-3 h-3 rounded-full bg-emerald-600';
        badge.className = 'px-2.5 py-0.5 text-xs font-bold rounded bg-emerald-600 text-white';
        badge.textContent = 'PLATNÁ SESTAVA';
    }

    let html = '';

    // Zobrazení chyb pravidel
    if (validation.errors.length > 0) {
        html += validation.errors.map(err => `
            <div class="p-3 rounded-lg bg-red-100 border border-red-300 text-red-950 text-xs leading-relaxed flex items-start gap-2.5">
                <svg class="w-4 h-4 text-red-700 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
                </svg>
                <div>${err}</div>
            </div>
        `).join('');

        // Tlačítko rychlé opravy pořadí přímo ve validátoru
        if (currentRole === 'captain') {
            html += `
                <button type="button" onclick="autoSortCurrentLineup()"
                    class="w-full py-2 px-3 bg-red-700 hover:bg-red-800 text-white text-xs font-semibold rounded-lg transition cursor-pointer shadow-sm">
                    Automaticky seřadit hráče podle soupisky
                </button>
            `;
        }
    }

    // Zobrazení varování
    if (validation.warnings.length > 0) {
        html += validation.warnings.map(warn => `
            <div class="p-3 rounded-lg bg-amber-50 border border-amber-300 text-amber-950 text-xs leading-relaxed flex items-start gap-2.5">
                <svg class="w-4 h-4 text-amber-700 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <div>${warn}</div>
            </div>
        `).join('');
    }

    // Vše v pořádku
    if (validation.errors.length === 0 && validation.warnings.length === 0) {
        html += `
            <div class="p-3.5 rounded-lg bg-emerald-100/80 border border-emerald-300 text-emerald-950 text-xs leading-relaxed flex items-start gap-2.5">
                <svg class="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <div>
                    <strong>Všechna pravidla jsou splněna!</strong><br>
                    Pořadí hráčů odpovídá startovní listině, limit hostů/cizinců (${validation.guestsCount}/2) je v normě a všech 8 šachovnic je obsazeno.
                </div>
            </div>
        `;
    }

    // Souhrnné metriky sestavy
    html += `
        <div class="pt-3 border-t border-gray-200 grid grid-cols-2 gap-2 text-xs">
            <div class="p-2.5 rounded-lg bg-gray-50 border border-gray-200">
                <span class="text-gray-500 block">Obsazené šachovnice</span>
                <span class="font-bold text-gray-900 text-sm">${validation.filledCount} / 8</span>
            </div>
            <div class="p-2.5 rounded-lg bg-gray-50 border border-gray-200">
                <span class="text-gray-500 block">Hosté a cizinci</span>
                <span class="font-bold ${validation.guestsCount > 2 ? 'text-red-700' : 'text-gray-900'} text-sm">${validation.guestsCount} / 2 max.</span>
            </div>
        </div>
    `;

    messagesDiv.innerHTML = html;
}

// Pomocné akce pro sestavování družstva
window.autoSortCurrentLineup = function() {
    const team = appData.teams[currentTeamId];
    const match = team.matches.find(m => m.id === currentMatchId);
    if (!match) return;

    const filledIds = match.lineup.filter(id => id !== '');
    // Odstranit duplicity
    const uniqueIds = Array.from(new Set(filledIds));

    // Seřadit podle pořadového čísla na soupisce (rank)
    uniqueIds.sort((idA, idB) => {
        const pA = team.players.find(p => p.id === idA);
        const pB = team.players.find(p => p.id === idB);
        return (pA ? pA.rank : 999) - (pB ? pB.rank : 999);
    });

    // Doplnit prázdné sloty do délky 8
    while (uniqueIds.length < 8) {
        uniqueIds.push('');
    }

    match.lineup = uniqueIds.slice(0, 8);
    saveData();
    renderLineupBuilder();
    showToast('Hráči byli automaticky seřazeni podle oficiální soupisky.');
};

document.getElementById('autosort-lineup-btn').addEventListener('click', window.autoSortCurrentLineup);

document.getElementById('autofill-lineup-btn').addEventListener('click', () => {
    const team = appData.teams[currentTeamId];
    const match = team.matches.find(m => m.id === currentMatchId);
    if (!match) return;

    // Vybrat hráče s docházkou "yes" v pořadí soupisky (s respektem k limitu 2 hostů)
    const selected = [];
    let guestsCount = 0;

    for (const p of team.players) {
        if (selected.length >= 8) break;
        if (match.attendance[p.id] === 'yes') {
            const isGuest = p.status === 'host' || p.status === 'cizinec';
            if (isGuest && guestsCount >= 2) continue;
            selected.push(p.id);
            if (isGuest) guestsCount++;
        }
    }

    while (selected.length < 8) {
        selected.push('');
    }

    match.lineup = selected;
    saveData();
    renderLineupBuilder();
    showToast('Sestava byla doplněna z hráčů, kteří potvrdili účast.');
});

document.getElementById('clear-lineup-btn').addEventListener('click', () => {
    const team = appData.teams[currentTeamId];
    const match = team.matches.find(m => m.id === currentMatchId);
    if (!match) return;

    match.lineup = ['', '', '', '', '', '', '', ''];
    saveData();
    renderLineupBuilder();
    showToast('Sestava byla vyčištěna.');
});

document.getElementById('save-lineup-btn').addEventListener('click', () => {
    const team = appData.teams[currentTeamId];
    const match = team.matches.find(m => m.id === currentMatchId);
    const validation = validateLineup(team, match.lineup);

    if (validation.hasRuleErrors) {
        showToast('Sestavu nelze zveřejnit: obsahuje porušení soupiskového řádu nebo limitu hostů!', 'error');
        return;
    }
    if (!validation.isValid) {
        showToast('Sestava byla uložena jako rozpracovaná (chybí obsadit všechny šachovnice).');
        return;
    }

    saveData();
    showToast(`Platná sestava pro ${match.round} (${team.name}) byla úspěšně uložena a zveřejněna!`);
});

// =====================================================================
// SPRÁVA SOUPISKY ODDÍLU
// =====================================================================
function recalculateRanks(team) {
    team.players.forEach((p, index) => {
        p.rank = index + 1;
    });
}

window.removePlayerFromRoster = function(playerId) {
    if (currentRole !== 'captain') return;
    const team = appData.teams[currentTeamId];
    const idx = team.players.findIndex(p => p.id === playerId);
    if (idx === -1) return;

    const removedPlayer = team.players[idx];
    team.players.splice(idx, 1);
    recalculateRanks(team);

    // Odstranit hráče z docházky i z případných sestav zápasů daného družstva
    team.matches.forEach(m => {
        if (m.attendance && playerId in m.attendance) {
            delete m.attendance[playerId];
        }
        if (Array.isArray(m.lineup)) {
            m.lineup = m.lineup.map(id => (id === playerId ? '' : id));
        }
    });

    saveData();
    renderAll();
    showToast(`Hráč ${removedPlayer.name} byl odebrán ze soupisky a pořadí bylo přepočítáno.`);
};

function renderRoster() {
    const team = appData.teams[currentTeamId];
    document.getElementById('roster-title').textContent = `Oficiální soupiska – ${team.name}`;
    
    const isCaptain = currentRole === 'captain';
    // Skrýt formulář pro přidání hráče a sloupec Akce, pokud je uživatel v roli Hráč
    document.getElementById('add-player-card').classList.toggle('hidden', !isCaptain);
    const actionsTh = document.getElementById('roster-actions-th');
    if (actionsTh) {
        actionsTh.classList.toggle('hidden', !isCaptain);
    }

    // Nastavit výchozí hodnotu a rozsah pro pořadové číslo nového hráče
    const rankInput = document.getElementById('new-player-rank');
    const rankHint = document.getElementById('new-player-rank-hint');
    const maxRank = team.players.length + 1;
    if (rankInput) {
        rankInput.max = maxRank;
        rankInput.value = maxRank;
    }
    if (rankHint) {
        rankHint.textContent = `Rozsah: 1 až ${maxRank} (${maxRank} = konec soupisky)`;
    }

    const tbody = document.getElementById('roster-table-body');
    tbody.innerHTML = '';

    team.players.forEach(player => {
        const tr = document.createElement('tr');
        tr.className = 'hover:bg-gray-50';
        tr.innerHTML = `
            <td class="py-3 px-4 text-center font-mono font-bold text-gray-900">${player.rank}.</td>
            <td class="py-3 px-4 font-semibold text-gray-900">${player.name}</td>
            <td class="py-3 px-4 font-mono text-xs text-gray-700">${player.elo}</td>
            <td class="py-3 px-4">${getStatusBadge(player.status)}</td>
            <td class="py-3 px-4 text-right text-xs text-gray-500">
                ${player.isCaptain ? '<span class="font-bold text-gray-900">Kapitán</span>' : 'Hráč'}
            </td>
            ${isCaptain ? `
            <td class="py-3 px-4 text-right">
                <button type="button" onclick="removePlayerFromRoster('${player.id}')"
                    title="Odebrat hráče ze soupisky"
                    class="px-2.5 py-1 text-xs font-medium text-red-700 hover:text-white hover:bg-red-700 border border-red-300 hover:border-red-700 rounded-md transition cursor-pointer">
                    Odebrat
                </button>
            </td>` : ''}
        `;
        tbody.appendChild(tr);
    });
}

document.getElementById('add-player-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const rankInput = document.getElementById('new-player-rank');
    const nameInput = document.getElementById('new-player-name');
    const eloInput = document.getElementById('new-player-elo');
    const statusInput = document.getElementById('new-player-status');

    const name = nameInput.value.trim();
    const elo = parseInt(eloInput.value, 10);
    const status = statusInput.value;

    if (!name || isNaN(elo)) return;

    const team = appData.teams[currentTeamId];
    const maxRank = team.players.length + 1;
    let targetRank = parseInt(rankInput.value, 10);
    if (isNaN(targetRank) || targetRank < 1) targetRank = 1;
    if (targetRank > maxRank) targetRank = maxRank;

    const newId = `${currentTeamId}_p_${Date.now()}`;
    const newPlayer = {
        id: newId,
        rank: targetRank,
        name: name,
        elo: elo,
        status: status,
        isCaptain: false
    };

    // Vložení na konkrétní pozici (index = targetRank - 1) a přepočet pořadí celé soupisky
    team.players.splice(targetRank - 1, 0, newPlayer);
    recalculateRanks(team);

    // Inicializovat docházku pro existující zápasy
    team.matches.forEach(m => {
        m.attendance[newId] = 'unknown';
    });

    saveData();
    nameInput.value = '';
    renderAll();
    showToast(`Hráč ${name} byl vložen na ${targetRank}. místo soupisky.`);
});

// Hlavní vykreslovací funkce
function renderAll() {
    renderMatchesAndAttendance();
    renderLineupBuilder();
    renderRoster();
}
