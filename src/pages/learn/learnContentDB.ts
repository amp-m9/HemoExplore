import whiteBloodCellIcon from '../../assets/icons/white-blood-cell.svg'
import redBloodCellIcon from '../../assets/icons/blood.svg'
import sickleCellIcon from '../../assets/icons/sickle.svg'

export interface LearnSubjectProps {
    summary:string,
    icon:string,
    title: string,
    subTitle: string,
    model?: string,
    next?: string,
}

export const  sections = {
    RedBloodCells:"red-blood-cells",
    haemoglobin: "haemoglobin",
    whiteBloodCells: "white-blood-cells"
}

const getIndex = (val:string)=>{
    const values = Object.values(sections)
    return values[values.indexOf(val)%values.length];
}

export const learnDB:{[id:string]:LearnSubjectProps} = {
    [sections.RedBloodCells]:{
        summary: "Red blood cells (RBCs) are essential components of blood that transport oxygen from the lungs to body tissues and carry carbon dioxide waste back to the lungs for exhalation. Their flexibility allows them to navigate through tiny capillaries, ensuring efficient oxygen exchange. Hemoglobin, a protein within RBCs, binds with oxygen, enabling the cells to act as carriers of this life-sustaining gas. RBCs also play a vital role in maintaining pH balance, supporting overall oxygenation and maintaining physiological equilibrium.",
        icon:redBloodCellIcon,
        title: "RED BLOOD CELLS",
        subTitle: "BLOOD'S OXYGEN RUNNERS",
        next: getIndex(sections.RedBloodCells),
    },
    [sections.haemoglobin]:{
        title: "HAEMOGLOBIN",
        subTitle: "A MULTIFACETED OXYGEN TRANSPORTER", 
        icon:sickleCellIcon,
        summary: "something",
    }
}
