// ============================================
// SUPABASE CONFIGURATION
// ============================================
const SUPABASE_URL = 'https://xttsctrobcopyubzhhda.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh0dHNjdHJvYmNvcHl1YnpoaGRhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODIyNDExMDcsImV4cCI6MjA5NzgxNzEwN30.xE3OlqhB24TA6KvbYoeD11reCPk6OREL1susImPuWtU';

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// গ্লোবাল এডিট ফ্ল্যাগ (রোল নম্বর পরিবর্তন রোধ করার জন্য)
let editingStudentId = null;
let isEditing = false;

// ============================================
// DATA DICTIONARIES
// ============================================
const subjects = {
    BA: {
        major: ['Bengali', 'English', 'Education', 'History', 'Journalism & Mass Communication', 'Philosophy', 'Political Science', 'Sanskrit', 'Sociology'],
        minor: ['Bengali', 'English', 'Education', 'History', 'Journalism & Mass Communication', 'Philosophy', 'Political Science', 'Sanskrit', 'Sociology', 'Psychology', 'Economics', 'Geography', 'Food and Nutrition']
    },
    BSc: {
        major: ['Anthropology', 'Botany', 'Chemistry', 'Computer Science', 'Economics', 'Geography', 'Mathematics', 'Physics', 'Zoology'],
        minor: ['Anthropology', 'Botany', 'Chemistry', 'Computer Science', 'Economics', 'Geography', 'Mathematics', 'Physics', 'Zoology', 'Micro Biology', 'Food and Nutrition', 'Psychology', 'Political Science', 'History']
    },
    BCom: {
        major: ['Accountancy'],
        minor: []
    }
};

const mdcSubjects = [
    'Sociology', 'Political Science', 'History', 'Journalism', 'Psychology', 'Economics',
    'Philosophy', 'Mathematics', 'Chemistry', 'Computer Application', 'Anthropology',
    'Physics', 'Commerce', 'Library Science', 'Education'
];

const bcomHonoursSEC = {
    secSem1: 'Information Technology in Business',
    secSem2: 'Business Ethics and Corporate Governance',
    secSem3: 'E-filing of Tax Returns'
};

const bcomGeneralSEC = {
    secGenSem3: 'Computerised Accounting & E-Business Applications',
    secGenSem4: 'Entrepreneurship Development',
    secGenSem5: 'E-filing of Tax Returns',
    secGenSem6: 'E-Commerce & Business Communication'
};

const rollCodes = {
    Honours: { BA: 'AH', BSc: 'SH', BCom: 'CH' },
    General: { BA: 'AG', BSc: 'SG', BCom: 'CG' }
};

// ============================================
// TAB NAVIGATION
// ============================================
function showTab(tabName) {
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    
    const targetTab = document.getElementById(tabName + '-tab');
    if (targetTab) targetTab.classList.add('active');
    
    if (typeof event !== 'undefined' && event && event.target) {
        event.target.classList.add('active');
    } else {
        const targetBtn = document.querySelector(`button[onclick*="${tabName}"]`);
        if (targetBtn) targetBtn.classList.add('active');
    }

    if (tabName === 'master') loadStudents();
    if (tabName === 'idcard') loadIdCardGrid();
}

// ============================================
// PROGRAMME CHANGE HANDLER
// ============================================
function handleProgrammeChange() {
    const programme = document.getElementById('programme').value;
    resetDependentFields();

    if (!programme) {
        document.getElementById('streamSection').classList.add('hidden');
        document.getElementById('majorSection').classList.add('hidden');
        document.getElementById('minorSection').classList.add('hidden');
        document.getElementById('mdcSection').classList.add('hidden');
        document.getElementById('secSection').classList.add('hidden');
        document.getElementById('vacAecSection').classList.add('hidden');
        return;
    }

    document.getElementById('streamSection').classList.remove('hidden');
    document.getElementById('vacAecSection').classList.remove('hidden');
    document.getElementById('mdcSection').classList.remove('hidden');

    if (programme === 'Honours') {
        document.getElementById('majorSection').classList.remove('hidden');
        document.getElementById('minorSection').classList.remove('hidden');
        document.getElementById('secSection').classList.remove('hidden');
        document.getElementById('mdcHonours').classList.remove('hidden');
        document.getElementById('mdcGeneral').classList.add('hidden');
        document.getElementById('secHonours').classList.remove('hidden');
        document.getElementById('secGeneral').classList.add('hidden');
        document.getElementById('minor3Row').classList.add('hidden');
        document.getElementById('minor3').required = false;
    } else {
        document.getElementById('majorSection').classList.add('hidden');
        document.getElementById('minorSection').classList.remove('hidden');
        document.getElementById('secSection').classList.remove('hidden');
        document.getElementById('mdcHonours').classList.add('hidden');
        document.getElementById('mdcGeneral').classList.remove('hidden');
        document.getElementById('secHonours').classList.add('hidden');
        document.getElementById('secGeneral').classList.remove('hidden');
        document.getElementById('minor3Row').classList.remove('hidden');
        document.getElementById('minor3').required = false;
    }
    generateRollNo();
}

// ============================================
// STREAM CHANGE HANDLER
// ============================================
function handleStreamChange() {
    const stream = document.getElementById('stream').value;
    const programme = document.getElementById('programme').value;

    if (!stream) return;

    const majorSelect = document.getElementById('majorSubject');
    majorSelect.innerHTML = '<option value="">-- Select Major Subject --</option>';

    if (programme === 'Honours' && subjects[stream]) {
        subjects[stream].major.forEach(sub => {
            majorSelect.innerHTML += `<option value="${sub}">${sub}</option>`;
        });

        if (stream !== 'BCom') {
            document.getElementById('minor1').innerHTML = '<option value="">-- Select Major Subject First --</option>';
            document.getElementById('minor2').innerHTML = '<option value="">-- Select Major Subject First --</option>';
            document.getElementById('secSem3').innerHTML = '<option value="">-- Select Minors First --</option>';
        }
    }

    if (stream === 'BCom' && programme === 'Honours') {
        majorSelect.value = 'Accountancy';
        handleMajorChange();
        document.getElementById('honSecSem1Group').classList.add('hidden');
        document.getElementById('honSecSem2Group').classList.add('hidden');
        document.getElementById('honSecSem3Group').classList.add('hidden');
        document.getElementById('bcomHonSecSem1Group').classList.remove('hidden');
        document.getElementById('bcomHonSecSem2Group').classList.remove('hidden');
        document.getElementById('bcomHonSecSem3Group').classList.remove('hidden');
        document.getElementById('bcomHonSecSem1').value = bcomHonoursSEC.secSem1;
        document.getElementById('bcomHonSecSem2').value = bcomHonoursSEC.secSem2;
        document.getElementById('bcomHonSecSem3').value = bcomHonoursSEC.secSem3;
    } else if (programme === 'Honours') {
        document.getElementById('honSecSem1Group').classList.remove('hidden');
        document.getElementById('honSecSem2Group').classList.remove('hidden');
        document.getElementById('honSecSem3Group').classList.remove('hidden');
        document.getElementById('bcomHonSecSem1Group').classList.add('hidden');
        document.getElementById('bcomHonSecSem2Group').classList.add('hidden');
        document.getElementById('bcomHonSecSem3Group').classList.add('hidden');
    }

    if (stream === 'BCom' && programme === 'General') {
        document.getElementById('minorSection').classList.add('hidden');
        document.getElementById('minor1').required = false;
        document.getElementById('minor2').required = false;
        document.getElementById('minor3').required = false;

        document.getElementById('secGenSem5Group').classList.add('hidden');
        document.getElementById('secGenSem6Group').classList.add('hidden');
        document.getElementById('bcomSecGenSem5Group').classList.remove('hidden');
        document.getElementById('bcomSecGenSem6Group').classList.remove('hidden');

        document.getElementById('secGenSem3').value = bcomGeneralSEC.secGenSem3;
        document.getElementById('secGenSem4').value = bcomGeneralSEC.secGenSem4;
        document.getElementById('bcomSecGenSem5').value = bcomGeneralSEC.secGenSem5;
        document.getElementById('bcomSecGenSem6').value = bcomGeneralSEC.secGenSem6;

        enableMDCGeneral();
    } else if (programme === 'General') {
        document.getElementById('minorSection').classList.remove('hidden');
        document.getElementById('secGenSem5Group').classList.remove('hidden');
        document.getElementById('secGenSem6Group').classList.remove('hidden');
        document.getElementById('bcomSecGenSem5Group').classList.add('hidden');
        document.getElementById('bcomSecGenSem6Group').classList.add('hidden');
        disableMDCGeneral();
    }

    if (programme === 'General') {
        populateMinorSubjects(stream);
    }
    populateMDC();
    generateRollNo();
}

function disableMDCGeneral() {
    document.getElementById('mdcGenSem4').disabled = true;
    document.getElementById('mdcGenSem5').disabled = true;
    document.getElementById('mdcGenSem6').disabled = true;
    document.getElementById('mdcGenSem4').innerHTML = '<option value="">-- Select Minor 1,2,3 first --</option>';
    document.getElementById('mdcGenSem5').innerHTML = '<option value="">-- Select MDC Sem IV first --</option>';
    document.getElementById('mdcGenSem6').innerHTML = '<option value="">-- Select MDC Sem V first --</option>';
}

function enableMDCGeneral() {
    document.getElementById('mdcGenSem4').disabled = false;
    document.getElementById('mdcGenSem5').disabled = true;
    document.getElementById('mdcGenSem6').disabled = true;
    populateMDCGeneral();
}

function updateHonoursDropdowns() {
    const stream = document.getElementById('stream').value;
    const major = document.getElementById('majorSubject').value;
    const m1Select = document.getElementById('minor1');
    const m2Select = document.getElementById('minor2');

    if (!stream || !subjects[stream]) return;

    const m1Val = m1Select.value;
    const m2Val = m2Select.value;

    m1Select.innerHTML = '<option value="">-- Select Minor 1 --</option>';
    subjects[stream].minor.forEach(sub => {
        if (sub !== major) {
            const isTaken = sub === m2Val;
            if (!isTaken || sub === m1Val) {
                m1Select.innerHTML += `<option value="${sub}" ${sub === m1Val ? 'selected' : ''}>${sub}</option>`;
            }
        }
    });

    m2Select.innerHTML = '<option value="">-- Select Minor 2 --</option>';
    subjects[stream].minor.forEach(sub => {
        if (sub !== major && sub !== m1Select.value) {
            m2Select.innerHTML += `<option value="${sub}" ${sub === m2Val ? 'selected' : ''}>${sub}</option>`;
        }
    });

    ['mdcSem1', 'mdcSem2', 'mdcSem3'].forEach(id => {
        const select = document.getElementById(id);
        const currentVal = select.value;
        select.innerHTML = '<option value="">-- Select --</option>';
        mdcSubjects.forEach(sub => {
            if (sub !== major && sub !== m1Select.value && sub !== m2Select.value) {
                select.innerHTML += `<option value="${sub}" ${sub === currentVal ? 'selected' : ''}>${sub}</option>`;
            }
        });
    });
}

function handleMajorChange() {
    const major = document.getElementById('majorSubject').value;
    const programme = document.getElementById('programme').value;
    const stream = document.getElementById('stream').value;

    if (!major) return;

    if (programme === 'Honours' && stream !== 'BCom') {
        document.getElementById('secSem1').value = major;
        document.getElementById('secSem2').value = major;
    }

    updateHonoursDropdowns();
    generateRollNo();
}

function handleMinor1Change() {
    const minor1 = document.getElementById('minor1').value;
    const major = document.getElementById('majorSubject').value;
    const stream = document.getElementById('stream').value;
    const programme = document.getElementById('programme').value;

    if (!minor1 || !stream || !subjects[stream]) return;

    const minor2Select = document.getElementById('minor2');
    minor2Select.innerHTML = '<option value="">-- Select Minor 2 --</option>';
    subjects[stream].minor.forEach(sub => {
        if (sub !== major && sub !== minor1) {
            minor2Select.innerHTML += `<option value="${sub}">${sub}</option>`;
        }
    });

    if (programme === 'General') {
        const minor3Select = document.getElementById('minor3');
        minor3Select.innerHTML = '<option value="">-- Select Minor 3 --</option>';
        subjects[stream].minor.forEach(sub => {
            if (sub !== major && sub !== minor1) {
                minor3Select.innerHTML += `<option value="${sub}">${sub}</option>`;
            }
        });
        document.getElementById('secGenSem3').value = minor1;
        document.getElementById('secGenSem4').value = minor1;
    }

    if (programme === 'Honours' && stream !== 'BCom') {
        updateSecSem3Options();
    }

    if (programme === 'General') {
        checkMinorsAndEnableMDC();
    }
}

function handleMinor2Change() {
    const programme = document.getElementById('programme').value;
    const stream = document.getElementById('stream').value;
    const minor1 = document.getElementById('minor1').value;
    const minor2 = document.getElementById('minor2').value;
    const major = document.getElementById('majorSubject').value;

    if (programme === 'Honours' && stream !== 'BCom' && minor1 && minor2 && minor1 === minor2) {
        showMessage('Error: Minor 1 and Minor 2 cannot be the same subject!', 'error');
        document.getElementById('minor2').value = '';
        return;
    }

    if (programme === 'Honours' && stream !== 'BCom') {
        updateSecSem3Options();
    }

    if (programme === 'General') {
        if (!stream || !subjects[stream]) return;

        const minor3Select = document.getElementById('minor3');
        const currentValue = minor3Select.value;
        minor3Select.innerHTML = '<option value="">-- Select Minor 3 --</option>';

        subjects[stream].minor.forEach(sub => {
            if (sub !== major && sub !== minor1 && sub !== minor2) {
                minor3Select.innerHTML += `<option value="${sub}">${sub}</option>`;
            }
        });

        if (currentValue && currentValue !== minor1 && currentValue !== minor2 && currentValue !== major) {
            minor3Select.value = currentValue;
        }

        checkMinorsAndEnableMDC();
    }
}

function handleMinor3Change() {
    const programme = document.getElementById('programme').value;
    if (programme === 'General') {
        checkMinorsAndEnableMDC();
    }
}

function checkMinorsAndEnableMDC() {
    const minor1 = document.getElementById('minor1').value;
    const minor2 = document.getElementById('minor2').value;
    const minor3 = document.getElementById('minor3').value;
    const stream = document.getElementById('stream').value;

    if ((stream === 'BA' || stream === 'BSc') && minor1 && minor2 && minor3) {
        enableMDCGeneral();
        populateMDCGeneralWithoutMinors();
        updateSecGenSem5Options();
    } else if ((stream === 'BA' || stream === 'BSc') && (!minor1 || !minor2 || !minor3)) {
        disableMDCGeneral();
    }
}

function updateSecSem3Options() {
    const minor1 = document.getElementById('minor1').value;
    const minor2 = document.getElementById('minor2').value;
    const secSem3 = document.getElementById('secSem3');

    secSem3.innerHTML = '<option value="">-- Select --</option>';
    if (minor1) secSem3.innerHTML += `<option value="${minor1}">${minor1} (Minor 1)</option>`;
    if (minor2) secSem3.innerHTML += `<option value="${minor2}">${minor2} (Minor 2)</option>`;
}

function updateSecGenSem5Options() {
    const minor2 = document.getElementById('minor2').value;
    const minor3 = document.getElementById('minor3').value;
    const secGenSem5 = document.getElementById('secGenSem5');
    const secGenSem6 = document.getElementById('secGenSem6');

    secGenSem5.innerHTML = '<option value="">-- Select --</option>';
    if (minor2) secGenSem5.innerHTML += `<option value="${minor2}">${minor2} (Minor 2)</option>`;
    if (minor3) secGenSem5.innerHTML += `<option value="${minor3}">${minor3} (Minor 3)</option>`;

    secGenSem6.innerHTML = '<option value="">-- Select --</option>';
    if (minor2) secGenSem6.innerHTML += `<option value="${minor2}">${minor2} (Minor 2)</option>`;
    if (minor3) secGenSem6.innerHTML += `<option value="${minor3}">${minor3} (Minor 3)</option>`;
}

function handleSecGenSem5Change() {
    const sem5Val = document.getElementById('secGenSem5').value;
    const sem6Select = document.getElementById('secGenSem6');

    if (sem5Val) {
        sem6Select.value = sem5Val;
        sem6Select.style.pointerEvents = 'none';
        sem6Select.style.backgroundColor = '#f8f9fa';
        sem6Select.style.color = '#999';
    } else {
        sem6Select.value = '';
        sem6Select.style.pointerEvents = 'auto';
        sem6Select.style.backgroundColor = 'white';
        sem6Select.style.color = '#333';
    }
}

function populateMDCGeneral() {
    ['mdcGenSem4', 'mdcGenSem5', 'mdcGenSem6'].forEach(id => {
        const select = document.getElementById(id);
        select.innerHTML = '<option value="">-- Select --</option>';
        mdcSubjects.forEach(sub => {
            select.innerHTML += `<option value="${sub}">${sub}</option>`;
        });
    });
}

function populateMDCGeneralWithoutMinors() {
    const minor1 = document.getElementById('minor1').value;
    const minor2 = document.getElementById('minor2').value;
    const minor3 = document.getElementById('minor3').value;
    const selectedMinors = [minor1, minor2, minor3].filter(m => m);

    ['mdcGenSem4', 'mdcGenSem5', 'mdcGenSem6'].forEach(id => {
        const select = document.getElementById(id);
        select.innerHTML = '<option value="">-- Select --</option>';
        mdcSubjects.forEach(sub => {
            if (!selectedMinors.includes(sub)) {
                select.innerHTML += `<option value="${sub}">${sub}</option>`;
            }
        });
    });
}

function handleMDCGenSem4Change() {
    const sem4Val = document.getElementById('mdcGenSem4').value;
    const sem5Select = document.getElementById('mdcGenSem5');
    const sem6Select = document.getElementById('mdcGenSem6');

    if (!sem4Val) {
        sem5Select.disabled = true;
        sem6Select.disabled = true;
        return;
    }

    sem5Select.disabled = false;
    sem6Select.disabled = true;

    const minor1 = document.getElementById('minor1').value;
    const minor2 = document.getElementById('minor2').value;
    const minor3 = document.getElementById('minor3').value;
    const selectedMinors = [minor1, minor2, minor3].filter(m => m);

    sem5Select.innerHTML = '<option value="">-- Select --</option>';
    sem6Select.innerHTML = '<option value="">-- Select MDC Sem V first --</option>';

    mdcSubjects.forEach(sub => {
        if (sub !== sem4Val && !selectedMinors.includes(sub)) {
            sem5Select.innerHTML += `<option value="${sub}">${sub}</option>`;
        }
    });
}

function handleMDCGenSem5Change() {
    const sem4Val = document.getElementById('mdcGenSem4').value;
    const sem5Val = document.getElementById('mdcGenSem5').value;
    const sem6Select = document.getElementById('mdcGenSem6');

    if (!sem5Val) {
        sem6Select.disabled = true;
        return;
    }

    sem6Select.disabled = false;

    const minor1 = document.getElementById('minor1').value;
    const minor2 = document.getElementById('minor2').value;
    const minor3 = document.getElementById('minor3').value;
    const selectedMinors = [minor1, minor2, minor3].filter(m => m);

    sem6Select.innerHTML = '<option value="">-- Select --</option>';
    mdcSubjects.forEach(sub => {
        if (sub !== sem4Val && sub !== sem5Val && !selectedMinors.includes(sub)) {
            sem6Select.innerHTML += `<option value="${sub}">${sub}</option>`;
        }
    });
}

function populateMinorSubjects(stream) {
    if (!stream || !subjects[stream]) return;

    const minorOptions = subjects[stream].minor;
    ['minor1', 'minor2', 'minor3'].forEach(id => {
        const select = document.getElementById(id);
        if (!select) return;
        select.innerHTML = '<option value="">-- Select --</option>';
        minorOptions.forEach(sub => {
            select.innerHTML += `<option value="${sub}">${sub}</option>`;
        });
    });

    if (stream === 'BCom') {
        document.getElementById('minorSection').classList.add('hidden');
        document.getElementById('minor1').required = false;
        document.getElementById('minor2').required = false;
        document.getElementById('minor3').required = false;
    }
}

function populateMDC() {
    ['mdcSem1', 'mdcSem2', 'mdcSem3'].forEach(id => {
        const select = document.getElementById(id);
        if (!select) return;
        select.innerHTML = '<option value="">-- Select --</option>';
        mdcSubjects.forEach(sub => {
            select.innerHTML += `<option value="${sub}">${sub}</option>`;
        });
    });
}

function resetDependentFields() {
    document.getElementById('stream').value = '';
    document.getElementById('majorSubject').innerHTML = '<option value="">-- Select Major Subject --</option>';
    document.getElementById('minor1').innerHTML = '<option value="">-- Select --</option>';
    document.getElementById('minor2').innerHTML = '<option value="">-- Select --</option>';
    document.getElementById('mdcSem1').innerHTML = '<option value="">-- Select --</option>';
    document.getElementById('mdcSem2').innerHTML = '<option value="">-- Select --</option>';
    document.getElementById('mdcSem3').innerHTML = '<option value="">-- Select --</option>';

    ['majorSubject', 'minor1', 'minor2', 'minor3'].forEach(id => {
        document.getElementById(id).value = '';
    });

    ['secSem1', 'secSem2', 'secGenSem3', 'secGenSem4', 'secGenSem5', 'secGenSem6',
     'bcomSecGenSem5', 'bcomSecGenSem6', 'bcomHonSecSem1', 'bcomHonSecSem2', 'bcomHonSecSem3'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.value = '';
    });

    ['mdcSem1', 'mdcSem2', 'mdcSem3', 'mdcGenSem4', 'mdcGenSem5', 'mdcGenSem6'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.value = '';
    });

    const aecSem3 = document.getElementById('aecSem3');
    if (aecSem3) aecSem3.value = 'English';

    document.getElementById('honSecSem1Group').classList.remove('hidden');
    document.getElementById('honSecSem2Group').classList.remove('hidden');
    document.getElementById('honSecSem3Group').classList.remove('hidden');
    document.getElementById('bcomHonSecSem1Group').classList.add('hidden');
    document.getElementById('bcomHonSecSem2Group').classList.add('hidden');
    document.getElementById('bcomHonSecSem3Group').classList.add('hidden');
    document.getElementById('secGenSem5Group').classList.remove('hidden');
    document.getElementById('secGenSem6Group').classList.remove('hidden');
    document.getElementById('bcomSecGenSem5Group').classList.add('hidden');
    document.getElementById('bcomSecGenSem6Group').classList.add('hidden');

    document.getElementById('majorSubject').required = false;
    document.getElementById('minor1').required = false;
    document.getElementById('minor2').required = false;
    document.getElementById('minor3').required = false;
}

async function generateRollNo() {
    if (isEditing) return; // এডিট মোডে থাকলে রোল নম্বর জেনারেশন ব্লক থাকবে

    const programme = document.getElementById('programme').value;
    const stream = document.getElementById('stream').value;

    if (!programme || !stream) {
        document.getElementById('rollNo').value = '';
        return;
    }

    const prefix = '26' + rollCodes[programme][stream];

    try {
        const { data, error } = await supabaseClient
            .from('students')
            .select('roll_no')
            .ilike('roll_no', prefix + '%')
            .order('roll_no', { ascending: false })
            .limit(1);

        let lastNum = 0;
        if (data && data.length > 0) {
            const match = data[0].roll_no.match(/\d{4}$/);
            if (match) lastNum = parseInt(match[0]);
        }

        const newNum = String(lastNum + 1).padStart(4, '0');
        document.getElementById('rollNo').value = prefix + newNum;
    } catch (error) {
        console.error('Error generating roll no:', error);
        document.getElementById('rollNo').value = prefix + '0001';
    }
}

// ============================================
// SAVE / UPDATE STUDENT DATA
// ============================================
document.getElementById('studentForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const programme = document.getElementById('programme').value;
    const stream = document.getElementById('stream').value;

    document.getElementById('majorSubject').required = false;
    document.getElementById('minor1').required = false;
    document.getElementById('minor2').required = false;
    document.getElementById('minor3').required = false;

    if (programme === 'Honours' && stream !== 'BCom') {
        const major = document.getElementById('majorSubject').value;
        if (!major) {
            showMessage('Error: Please select Major Subject!', 'error');
            return;
        }
    }

    if (programme === 'Honours' && stream !== 'BCom') {
        const minor1 = document.getElementById('minor1').value;
        const minor2 = document.getElementById('minor2').value;
        if (minor1 && minor2 && minor1 === minor2) {
            showMessage('Error: Minor 1 and Minor 2 cannot be the same subject!', 'error');
            return;
        }
    }

    let secSem1Val, secSem2Val, secSem3Val;
    let secGenSem5Val, secGenSem6Val;

    if (stream === 'BCom' && programme === 'Honours') {
        secSem1Val = bcomHonoursSEC.secSem1;
        secSem2Val = bcomHonoursSEC.secSem2;
        secSem3Val = bcomHonoursSEC.secSem3;
    } else if (stream === 'BCom' && programme === 'General') {
        secGenSem5Val = bcomGeneralSEC.secGenSem5;
        secGenSem6Val = bcomGeneralSEC.secGenSem6;
    } else {
        secSem1Val = document.getElementById('secSem1').value;
        secSem2Val = document.getElementById('secSem2').value;
        secSem3Val = document.getElementById('secSem3').value;
        secGenSem5Val = document.getElementById('secGenSem5').value;
        secGenSem6Val = document.getElementById('secGenSem6').value;
    }

    const minor1Val = (stream === 'BCom' && programme === 'General') ? null : (document.getElementById('minor1').value || null);
    const minor2Val = (stream === 'BCom' && programme === 'General') ? null : (document.getElementById('minor2').value || null);
    const minor3Val = (stream === 'BCom' && programme === 'General') ? null : (document.getElementById('minor3').value || null);

    const secGenSem3Val = (stream === 'BCom' && programme === 'General')
        ? bcomGeneralSEC.secGenSem3
        : (programme === 'General' ? (document.getElementById('minor1').value || null) : null);
    const secGenSem4Val = (stream === 'BCom' && programme === 'General')
        ? bcomGeneralSEC.secGenSem4
        : (programme === 'General' ? (document.getElementById('minor1').value || null) : null);

    const studentData = {
        student_name: document.getElementById('studentName').value.trim(),
        father_name: document.getElementById('fatherName').value.trim(),
        guardian_name: document.getElementById('guardianName').value.trim(),
        mobile_no: document.getElementById('mobileNo').value.trim(),
        programme: programme,
        stream: stream,
        department: stream === 'BA' ? 'Bachelor of Arts' : stream === 'BSc' ? 'Bachelor of Science' : 'Bachelor of Commerce',
        roll_no: document.getElementById('rollNo').value,
        session: '2026',
        blood_group: document.getElementById('bloodGroup').value.trim(),
        emergency_contact: document.getElementById('emergencyContact').value.trim(),
        address: document.getElementById('address').value.trim(),
        major_subject: document.getElementById('majorSubject').value || null,
        minor_1: minor1Val,
        minor_2: minor2Val,
        minor_3: minor3Val,
        mdc_sem1: document.getElementById('mdcSem1').value || null,
        mdc_sem2: document.getElementById('mdcSem2').value || null,
        mdc_sem3: document.getElementById('mdcSem3').value || null,
        mdc_gen_sem4: document.getElementById('mdcGenSem4').value || null,
        mdc_gen_sem5: document.getElementById('mdcGenSem5').value || null,
        mdc_gen_sem6: document.getElementById('mdcGenSem6').value || null,
        sec_sem1: secSem1Val || null,
        sec_sem2: secSem2Val || null,
        sec_sem3: secSem3Val || null,
        sec_gen_sem3: secGenSem3Val,
        sec_gen_sem4: secGenSem4Val,
        sec_gen_sem5: secGenSem5Val || null,
        sec_gen_sem6: secGenSem6Val || null,
        vac_sem1: 'ENVS',
        vac_sem2: 'Cyber Security',
        aec_sem1: document.getElementById('aecSem1')?.value || 'English',
        aec_sem2: document.getElementById('aecSem2')?.value || 'English',
        aec_sem3: document.getElementById('aecSem3')?.value || null
    };

    try {
        if (editingStudentId) {
            const { data: oldData } = await supabaseClient
                .from('students')
                .select('*')
                .eq('id', editingStudentId)
                .single();

            let changes = [];
            if (oldData) {
                if (oldData.student_name !== studentData.student_name) changes.push(`Name: ${oldData.student_name} -> ${studentData.student_name}`);
                if (oldData.mobile_no !== studentData.mobile_no) changes.push(`Mobile: ${oldData.mobile_no} -> ${studentData.mobile_no}`);
                if (oldData.major_subject !== studentData.major_subject) changes.push(`Major: ${oldData.major_subject || 'None'} -> ${studentData.major_subject || 'None'}`);
                if (oldData.programme !== studentData.programme) changes.push(`Programme: ${oldData.programme} -> ${studentData.programme}`);
                if (oldData.address !== studentData.address) changes.push(`Address updated`);
            }

            studentData.change_history = changes.length > 0 ? changes.join(', ') : 'Updated (Minor changes)';
            studentData.is_updated = true;
            studentData.updated_at = new Date().toISOString();

            const { error } = await supabaseClient
                .from('students')
                .update(studentData)
                .eq('id', editingStudentId);

            if (error) throw error;
            showMessage('Student data updated successfully!', 'success');
            
            editingStudentId = null;
            isEditing = false;
            const submitBtn = document.querySelector('#studentForm button[type="submit"]');
            if (submitBtn) submitBtn.textContent = 'Save Student Data';
        } else {
            studentData.change_history = 'New Registration';
            studentData.is_updated = false;

            const { error } = await supabaseClient
                .from('students')
                .insert([studentData]);

            if (error) throw error;
            showMessage('Student data saved successfully! Roll No: ' + studentData.roll_no, 'success');
        }

        window.lastSavedStudent = studentData;
        const printBtn = document.getElementById('printLastBtn');
        if (printBtn) printBtn.style.display = 'inline-block';

        document.getElementById('studentForm').reset();
        document.getElementById('session').value = '2026';

        ['streamSection', 'majorSection', 'minorSection', 'mdcSection', 'secSection', 'vacAecSection'].forEach(id => {
            const el = document.getElementById(id);
            if (el) el.classList.add('hidden');
        });
        document.getElementById('rollNo').value = '';

    } catch (error) {
        showMessage('Error: ' + error.message, 'error');
        console.error('Error:', error);
    }
});

function showMessage(text, type) {
    const msg = document.getElementById('message');
    if (!msg) return;
    msg.textContent = text;
    msg.className = type;
    msg.style.display = 'block';
    setTimeout(() => { msg.style.display = 'none'; }, 5000);
}

// ============================================
// LOAD & DISPLAY STUDENTS (MASTER DATA TAB)
// ============================================
async function loadStudents() {
    try {
        const { data, error } = await supabaseClient
            .from('students')
            .select('*')
            .order('created_at', { ascending: false });

        if (error) throw error;

        const tbody = document.querySelector('#studentsTable tbody');
        if (!tbody) return;
        tbody.innerHTML = '';

        data.forEach(student => {
            const row = tbody.insertRow();
            
            if (student.is_updated) {
                row.classList.add('highlight-updated');
            }

            // ভেরিফাইড স্ট্যাটাসের ওপর ভিত্তি করে বাটনের স্টাইল ও টেক্সট নির্ধারণ
            const isVerified = student.is_verified === true;
            const btnBg = isVerified ? '#2ecc71' : '#e74c3c'; // সবুজ বা লাল
            const btnText = isVerified ? '✅ Verified' : '⏳ Verify';

            row.innerHTML = `
                <td>${student.roll_no}</td>
                <td>${student.student_name}</td>
                <td>${student.programme}</td>
                <td>${student.stream}</td>
                <td>${student.major_subject || '-'}</td>
                <td>${student.session}</td>
                <td>${student.mobile_no}</td>
                <td>
                    <button onclick="toggleVerifyStudent('${student.id}', ${!isVerified})" class="btn-verify" style="padding:5px 10px;font-size:13px;margin-right:5px;background-color:${btnBg};color:white;border:none;border-radius:4px;cursor:pointer;">${btnText}</button>
                    <button onclick="editStudent('${student.id}')" class="btn-primary" style="padding:5px 10px;font-size:13px;margin-right:5px;background-color:#f39c12;border:none;border-radius:4px;cursor:pointer;">✏️ Edit</button>
                    <button onclick="printStudentById('${student.id}')" class="btn-primary" style="padding:5px 10px;font-size:13px;margin-right:5px;border:none;border-radius:4px;cursor:pointer;">🖨️ Print</button>
                </td>
            `;
        });
    } catch (error) {
        console.error('Error loading students:', error);
    }
}

// ============================================
// EDIT STUDENT DATA (GLOBAL)
// ============================================
window.editStudent = async function(id) {
    try {
        isEditing = true; // এডিট শুরু হওয়ার সাথে সাথে রোল জেনারেটর লক হবে

        const { data, error } = await supabaseClient
            .from('students')
            .select('*')
            .eq('id', id)
            .single();

        if (error) throw error;
        if (!data) { showMessage('Student not found!', 'error'); return; }

        editingStudentId = data.id;

        const formTab = document.getElementById('entry-tab') || document.querySelectorAll('.tab-content')[0];
        const masterTab = document.getElementById('master-tab') || document.querySelectorAll('.tab-content')[1];
        
        if (formTab && masterTab) {
            formTab.classList.add('active');
            masterTab.classList.remove('active');
        }

        document.getElementById('studentName').value = data.student_name || '';
        document.getElementById('fatherName').value = data.father_name || '';
        document.getElementById('guardianName').value = data.guardian_name || '';
        document.getElementById('mobileNo').value = data.mobile_no || '';
        
        const progSelect = document.getElementById('programme');
        progSelect.value = data.programme || '';
        handleProgrammeChange();
        
        const streamSelect = document.getElementById('stream');
        streamSelect.value = data.stream || '';
        handleStreamChange();

        document.getElementById('rollNo').value = data.roll_no || '';
        document.getElementById('bloodGroup').value = data.blood_group || '';
        document.getElementById('emergencyContact').value = data.emergency_contact || '';
        document.getElementById('address').value = data.address || '';

        setTimeout(() => {
            if (data.major_subject && document.getElementById('majorSubject')) {
                document.getElementById('majorSubject').value = data.major_subject;
                handleMajorChange();
            }
            if (data.minor_1 && document.getElementById('minor1')) {
                document.getElementById('minor1').value = data.minor_1;
                handleMinor1Change();
            }
            if (data.minor_2 && document.getElementById('minor2')) {
                document.getElementById('minor2').value = data.minor_2;
                handleMinor2Change();
            }
            if (data.minor_3 && document.getElementById('minor3')) {
                document.getElementById('minor3').value = data.minor_3;
            }

            if (data.programme === 'Honours') {
                if(document.getElementById('mdcSem1')) document.getElementById('mdcSem1').value = data.mdc_sem1 || '';
                if(document.getElementById('mdcSem2')) document.getElementById('mdcSem2').value = data.mdc_sem2 || '';
                if(document.getElementById('mdcSem3')) document.getElementById('mdcSem3').value = data.mdc_sem3 || '';
                if(document.getElementById('secSem1')) document.getElementById('secSem1').value = data.sec_sem1 || '';
                if(document.getElementById('secSem2')) document.getElementById('secSem2').value = data.sec_sem2 || '';
                if(document.getElementById('secSem3')) document.getElementById('secSem3').value = data.sec_sem3 || '';
            } else {
                if(document.getElementById('mdcGenSem4')) {
                    document.getElementById('mdcGenSem4').value = data.mdc_gen_sem4 || '';
                    handleMDCGenSem4Change();
                }
                if(document.getElementById('mdcGenSem5')) {
                    document.getElementById('mdcGenSem5').value = data.mdc_gen_sem5 || '';
                    handleMDCGenSem5Change();
                }
                if(document.getElementById('mdcGenSem6')) document.getElementById('mdcGenSem6').value = data.mdc_gen_sem6 || '';
            }
        }, 400);

        const submitBtn = document.querySelector('#studentForm button[type="submit"]');
        if (submitBtn) submitBtn.textContent = 'Update Student Data';

        showMessage('Student data loaded for editing.', 'success');
        window.scrollTo({ top: 0, behavior: 'smooth' });

    } catch (error) {
        console.error('Error loading student for edit:', error);
        showMessage('Error: ' + error.message, 'error');
    }
};

// ============================================
// PRINT SINGLE STUDENT (FROM MASTER TAB)
// ============================================
async function printStudentById(id) {
    try {
        const { data, error } = await supabaseClient
            .from('students')
            .select('*')
            .eq('id', id)
            .single();

        if (error) throw error;
        if (!data) { showMessage('Student not found!', 'error'); return; }

        const printWindow = window.open('', '_blank');
        if (!printWindow) { showMessage('Please allow popups to print!', 'error'); return; }

        printWindow.document.write(generateA4PrintHTML(data));
        printWindow.document.close();
        setTimeout(() => { printWindow.print(); }, 500);
    } catch (error) {
        console.error('Print error:', error);
        showMessage('Print failed: ' + error.message, 'error');
    }
}

// ============================================
// A4 BOXED PRINT LAYOUT (Single Student)
// ============================================
function generateA4PrintHTML(student) {
    const programme = student.programme;
    const stream = student.stream;

    let minorHTML = '';
    if (stream === 'BCom') {
        minorHTML = `
            <div class="data-row"><span class="data-label">Minor 1:</span><span class="data-value">N/A</span></div>
            <div class="data-row"><span class="data-label">Minor 2:</span><span class="data-value">N/A</span></div>`;
    } else if (programme === 'Honours') {
        minorHTML = `
            <div class="data-row"><span class="data-label">Minor 1:</span><span class="data-value">${student.minor_1 || 'N/A'}</span></div>
            <div class="data-row"><span class="data-label">Minor 2:</span><span class="data-value">${student.minor_2 || 'N/A'}</span></div>`;
    } else {
        minorHTML = `
            <div class="data-row"><span class="data-label">Minor 1:</span><span class="data-value">${student.minor_1 || 'N/A'}</span></div>
            <div class="data-row"><span class="data-label">Minor 2:</span><span class="data-value">${student.minor_2 || 'N/A'}</span></div>
            <div class="data-row"><span class="data-label">Minor 3:</span><span class="data-value">${student.minor_3 || 'N/A'}</span></div>`;
    }

    let mdcHTML = '';
    if (programme === 'Honours') {
        mdcHTML = `
            <div class="data-row"><span class="data-label">Semester I:</span><span class="data-value">${student.mdc_sem1 || 'N/A'}</span></div>
            <div class="data-row"><span class="data-label">Semester II:</span><span class="data-value">${student.mdc_sem2 || 'N/A'}</span></div>
            <div class="data-row"><span class="data-label">Semester III:</span><span class="data-value">${student.mdc_sem3 || 'N/A'}</span></div>`;
    } else {
        mdcHTML = `
            <div class="data-row"><span class="data-label">Semester IV:</span><span class="data-value">${student.mdc_gen_sem4 || 'N/A'}</span></div>
            <div class="data-row"><span class="data-label">Semester V:</span><span class="data-value">${student.mdc_gen_sem5 || 'N/A'}</span></div>
            <div class="data-row"><span class="data-label">Semester VI:</span><span class="data-value">${student.mdc_gen_sem6 || 'N/A'}</span></div>`;
    }

    let secHTML = '';
    if (stream === 'BCom' && programme === 'Honours') {
        secHTML = `
            <div class="data-row"><span class="data-label">Semester I:</span><span class="data-value">Information Technology in Business</span></div>
            <div class="data-row"><span class="data-label">Semester II:</span><span class="data-value">Business Ethics and Corporate Governance</span></div>
            <div class="data-row"><span class="data-label">Semester III:</span><span class="data-value">E-filing of Tax Returns</span></div>`;
    } else if (stream === 'BCom' && programme === 'General') {
        secHTML = `
            <div class="data-row"><span class="data-label">Semester III:</span><span class="data-value">Computerised Accounting & E-Business Applications</span></div>
            <div class="data-row"><span class="data-label">Semester IV:</span><span class="data-value">Entrepreneurship Development</span></div>
            <div class="data-row"><span class="data-label">Semester V:</span><span class="data-value">E-filing of Tax Returns</span></div>
            <div class="data-row"><span class="data-label">Semester VI:</span><span class="data-value">E-Commerce & Business Communication</span></div>`;
    } else if (programme === 'Honours') {
        secHTML = `
            <div class="data-row"><span class="data-label">Semester I:</span><span class="data-value">${student.sec_sem1 || 'N/A'}</span></div>
            <div class="data-row"><span class="data-label">Semester II:</span><span class="data-value">${student.sec_sem2 || 'N/A'}</span></div>
            <div class="data-row"><span class="data-label">Semester III:</span><span class="data-value">${student.sec_sem3 || 'N/A'}</span></div>`;
    } else {
        secHTML = `
            <div class="data-row"><span class="data-label">Semester III:</span><span class="data-value">${student.sec_gen_sem3 || 'N/A'}</span></div>
            <div class="data-row"><span class="data-label">Semester IV:</span><span class="data-value">${student.sec_gen_sem4 || 'N/A'}</span></div>
            <div class="data-row"><span class="data-label">Semester V:</span><span class="data-value">${student.sec_gen_sem5 || 'N/A'}</span></div>
            <div class="data-row"><span class="data-label">Semester VI:</span><span class="data-value">${student.sec_gen_sem6 || 'N/A'}</span></div>`;
    }

    const vacAecHTML = `
        <div class="data-row"><span class="data-label">VAC Semester I:</span><span class="data-value">ENVS</span></div>
        <div class="data-row"><span class="data-label">VAC Semester II:</span><span class="data-value">Cyber Security</span></div>
        <div class="data-row"><span class="data-label">AEC Semester I:</span><span class="data-value">${student.aec_sem1 || 'English'}</span></div>
        <div class="data-row"><span class="data-label">AEC Semester II:</span><span class="data-value">${student.aec_sem2 || 'English'}</span></div>
        <div class="data-row"><span class="data-label">AEC Semester III:</span><span class="data-value">${student.aec_sem3 || 'N/A'}</span></div>`;

    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Print - ${student.student_name}</title>
    <style>
        @page { size: A4 portrait; margin: 0; }
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Courier New', Courier, monospace; background: #e0e0e0; display: flex; justify-content: center; align-items: flex-start; min-height: 100vh; padding: 10mm; }
        .a4-page { width: 210mm; min-height: 297mm; max-height: 297mm; background: white; padding: 10mm; box-sizing: border-box; box-shadow: 0 5px 15px rgba(0,0,0,0.2); overflow: hidden; }
        .outline-box { border: 2px solid #000; width: 100%; height: 100%; display: flex; flex-direction: column; }
        .top-bar { background-color: #000 !important; color: #fff !important; text-align: center; padding: 8px; font-size: 18px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; border-bottom: 2px solid #000; }
        .student-header { text-align: center; padding: 10px; border-bottom: 2px solid #000; background: #fff; }
        .student-header h2 { font-size: 20px; margin-bottom: 3px; color: #000; text-transform: uppercase; }
        .student-header p { font-size: 14px; font-weight: bold; color: #333; }
        .data-section { border-bottom: 2px solid #000; padding-bottom: 8px; }
        .data-section:last-child { border-bottom: none; padding-bottom: 10px; }
        .section-title { font-weight: bold; font-size: 14px; padding: 10px 15px 5px 15px; text-transform: uppercase; color: #000; }
        .data-row { display: flex; padding: 3px 15px; font-size: 13px; font-family: Arial, sans-serif; }
        .data-label { font-weight: bold; width: 180px; color: #000; }
        .data-value { flex: 1; color: #222; }
        @media print {
            body { background: white; padding: 0; display: block; }
            .a4-page { width: 210mm; height: 297mm; max-height: 297mm; padding: 8mm; box-shadow: none; margin: 0; }
            .outline-box { border: 2px solid #000; }
        }
    </style>
</head>
<body>
    <div class="a4-page">
        <div class="outline-box">
            <div class="top-bar">Mrinalini Datta Mahavidyapith</div>
            <div class="student-header">
                <h2>${student.student_name}</h2>
                <p>Roll No: ${student.roll_no}</p>
            </div>
            <div class="data-section">
                <div class="section-title">PROGRAMME INFORMATION</div>
                <div class="data-row"><span class="data-label">Programme:</span><span class="data-value">${programme}</span></div>
                <div class="data-row"><span class="data-label">Stream:</span><span class="data-value">${stream}</span></div>
                <div class="data-row"><span class="data-label">Major Subject:</span><span class="data-value">${student.major_subject || 'N/A'}</span></div>
                <div class="data-row"><span class="data-label">Session:</span><span class="data-value">${student.session}</span></div>
            </div>
            <div class="data-section">
                <div class="section-title">MINOR SUBJECTS</div>
                ${minorHTML}
            </div>
            <div class="data-section">
                <div class="section-title">MDC (MULTIDISCIPLINARY COURSE) SUBJECTS</div>
                ${mdcHTML}
            </div>
            <div class="data-section">
                <div class="section-title">SEC (SKILL ENHANCEMENT COURSE) SUBJECTS</div>
                ${secHTML}
            </div>
            <div class="data-section">
                <div class="section-title">VAC & AEC SUBJECTS</div>
                ${vacAecHTML}
            </div>
        </div>
    </div>
    <script>
        window.onload = function() { setTimeout(function() { window.print(); }, 500); };
    </script>
</body>
</html>`;
}

// ============================================
// EXPORT MASTER DATA TO EXCEL
// ============================================
async function exportToExcel() {
    try {
        const { data, error } = await supabaseClient.from('students').select('*');
        if (error) throw error;

        const excelData = data.map(s => ({
            'Roll No': s.roll_no,
            'Student Name': s.student_name,
            'Father Name': s.father_name,
            'Guardian Name': s.guardian_name,
            'Mobile No': s.mobile_no,
            'Programme': s.programme,
            'Stream': s.stream,
            'Department': s.department,
            'Major Subject': s.major_subject,
            'Minor 1': s.minor_1,
            'Minor 2': s.minor_2,
            'Minor 3': s.minor_3,
            'Session': s.session,
            'Blood Group': s.blood_group,
            'Emergency Contact': s.emergency_contact,
            'Address': s.address,
            'Verified Status': s.is_verified ? 'Verified' : 'Not Verified',
            'Created At': s.created_at ? new Date(s.created_at).toLocaleString() : '',
            'Edit Status': s.is_updated ? 'Edited' : 'Unedited',
            'Updated At': (s.is_updated && s.updated_at) ? new Date(s.updated_at).toLocaleString() : 'Not Edited',
            'Change History': s.change_history || 'No changes'
        }));

        const ws = XLSX.utils.json_to_sheet(excelData);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "Students");
        XLSX.writeFile(wb, "Master_Students_Data.xlsx");
    } catch (error) {
        console.error('Export error:', error);
    }
}

// ============================================
// ID CARD GRID (ID Card Tab)
// ============================================
async function loadIdCardGrid() {
    try {
        const { data, error } = await supabaseClient
            .from('students')
            .select('*')
            .order('roll_no');

        if (error) throw error;

        const tbody = document.querySelector('#idCardGrid tbody');
        if (!tbody) return;
        tbody.innerHTML = '';

        data.forEach(student => {
            const row = tbody.insertRow();
            row.setAttribute('data-id', student.id);
            const programmeInfo = `${student.programme} | ${student.stream}${student.major_subject ? ' | ' + student.major_subject : ''}`;
            row.innerHTML = `
                <td>${student.student_name}</td>
                <td>${student.guardian_name || ''}</td>
                <td>${programmeInfo}</td>
                <td>${student.roll_no}</td>
                <td>${student.session}</td>
                <td>${student.mobile_no}</td>
                <td>${student.blood_group || ''}</td>
                <td>${student.emergency_contact || ''}</td>
                <td>${student.address || ''}</td>
            `;
        });
    } catch (error) {
        console.error('Error loading ID card grid:', error);
    }
}

// ============================================
// CHANGE EVENT LISTENERS & INIT
// ============================================
['majorSubject', 'minor1', 'minor2', 'mdcSem1', 'mdcSem2', 'mdcSem3'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('change', updateHonoursDropdowns);
});

document.addEventListener('DOMContentLoaded', () => {
    loadStudents();
    loadIdCardGrid();
});

function cancelEdit() {
    editingStudentId = null;
    isEditing = false; // এডিট বাতিল হলে ফ্ল্যাগ রিসেট হবে
    document.getElementById('studentForm').reset();
    const submitBtn = document.querySelector('#studentForm button[type="submit"]');
    if (submitBtn) submitBtn.textContent = 'Save Student Data';
    showTab('master'); 
}

// ============================================
// SEARCH & HIGHLIGHT STUDENTS FUNCTION
// ============================================
function filterStudents() {
    const input = document.getElementById('searchInput');
    if (!input) return;
    const filter = input.value.toLowerCase().trim();
    const table = document.getElementById('studentsTable');
    if (!table) return;
    const tr = table.getElementsByTagName('tr');

    for (let i = 1; i < tr.length; i++) {
        const tdRoll = tr[i].getElementsByTagName('td')[0];   
        const tdName = tr[i].getElementsByTagName('td')[1];   
        const tdMobile = tr[i].getElementsByTagName('td')[6]; 

        if (tdRoll || tdName || tdMobile) {
            const rollText = tdRoll ? tdRoll.textContent.toLowerCase() : '';
            const nameText = tdName ? tdName.textContent.toLowerCase() : '';
            const mobileText = tdMobile ? tdMobile.textContent.toLowerCase() : '';

            if (filter === '') {
                tr[i].style.display = '';
                tr[i].classList.remove('highlight-row');
            } 
            else if (rollText.includes(filter) || nameText.includes(filter) || mobileText.includes(filter)) {
                tr[i].style.display = '';
                tr[i].classList.add('highlight-row');
            } else {
                tr[i].style.display = 'none';
                tr[i].classList.remove('highlight-row');
            }
        }
    }
}

// ============================================
// TOGGLE STUDENT VERIFICATION STATUS
// ============================================
async function toggleVerifyStudent(id, newStatus) {
    try {
        const { error } = await supabaseClient
            .from('students')
            .update({ is_verified: newStatus })
            .eq('id', id);

        if (error) throw error;

        showMessage(newStatus ? 'Student verified successfully!' : 'Verification removed!', 'success');
        loadStudents(); // টেবিল রিফ্রেশ করার জন্য
    } catch (error) {
        console.error('Error updating verification status:', error);
        showMessage('Error: ' + error.message, 'error');
    }
}