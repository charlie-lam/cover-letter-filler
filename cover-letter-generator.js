import holder from './cover-letter-variables.js'
import fs from 'fs';
import path from 'path';

const filePath = new URL('cover-letter.txt', import.meta.url);

const generator = async () => {
    const {companyName,
    companyMission,
    projectName,
    insertValue,
    insertSituation,
    insertSkill,
    insertResult,
    insertDuty,
    insertSkillTwo,
    insertSituationTwo,
    insertAction,
    insertResultTwo,
    insertExactLanguage,
    insertProject,
    insertSkillThree, 
    insertOwnTech,
    insertValueTwo,
    insertField
    } = holder
    const text = fs.readFileSync('cover-letter-gen/cover-letter.txt','utf8')
    const modified = eval('`' + text + '`')
    console.log(modified)

}

generator();


