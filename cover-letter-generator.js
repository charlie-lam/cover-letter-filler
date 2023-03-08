const holder = require('./cover-letter-variables.js');
const fs = require('fs');

const docx = require("docx");
const { Document, Packer, Paragraph, TextRun } = docx;
console.log(Document)

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

    const doc = new Document({
        sections: [{
            children: [
                new Paragraph({
                    text: modified
                }),
            ],
        }],
    });

    let filename;
    companyName !== "" ? filename = `cover-letter-${companyName}.docx` : filename = `cover-letter-no-name.docx`

    Packer.toBuffer(doc).then((buffer) => {
        fs.writeFileSync(filename, buffer);
    });

    console.log('File created')
}

generator();


