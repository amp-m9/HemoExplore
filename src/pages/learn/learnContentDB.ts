import whiteBloodCellIcon from '../../assets/icons/white-blood-cell.svg'
import redBloodCellIcon from '../../assets/icons/blood.svg'
import sickleCellIcon from '../../assets/icons/sickle.svg'

export interface LearnSubjectProps {
    summary:string,
    icon?:string,
    title: string,
    subTitle: string,
    model?: URL,
    next?: string,
}

export const  sections = {
    RedBloodCells:"red-blood-cells",
    haemoglobin: "haemoglobin",
    whiteBloodCells: "white-blood-cells"
}

const getNextIndex = (val:string)=>{
    const values = Object.values(sections)
    return values[values.indexOf(val)%values.length];
}

export const learnDB:{[id:string]:LearnSubjectProps} = {
    [sections.RedBloodCells]:{
        summary: "Red blood cells (RBCs) are essential components of blood that transport oxygen from the lungs to body tissues and carry carbon dioxide waste back to the lungs for exhalation. Their flexibility allows them to navigate through tiny capillaries, ensuring efficient oxygen exchange. Hemoglobin, a protein within RBCs, binds with oxygen, enabling the cells to act as carriers of this life-sustaining gas. RBCs also play a vital role in maintaining pH balance, supporting overall oxygenation and maintaining physiological equilibrium.",
        icon:redBloodCellIcon,
        title: "RED BLOOD CELLS",
        subTitle: "BLOOD'S OXYGEN RUNNERS",
        next: getNextIndex(sections.RedBloodCells),
        model : new URL("../../assets/models/redBloodCellPatched.glb", import.meta.url),
    },
    [sections.haemoglobin]:{
        title: "HAEMOGLOBIN",
        subTitle: "A MULTIFACETED OXYGEN TRANSPORTER", 
        summary: "Haemoglobin, a protein residing within red blood cells, is pivotal for the intricate process of oxygen transport in the human body. Structurally, it comprises four globular protein chains, each associated with a heme group containing iron. This iron is the crucial component that allows haemoglobin to bind and release oxygen in a reversible manner. Through cooperative binding, haemoglobin ensures efficient oxygen loading in the lungs and unloading in oxygen-deprived tissues. Its affinity for oxygen is modulated by factors like pH and carbon dioxide levels, a phenomenon known as the Bohr effect. Additionally, haemoglobin can bind to carbon dioxide and, in certain genetic conditions, undergo mutations leading to disorders like sickle cell disease and thalassemia, emphasizing its central role in human health and physiology.",
        next: getNextIndex(sections.haemoglobin);
    }
}
