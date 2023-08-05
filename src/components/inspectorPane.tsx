import { Component, createSignal } from "solid-js";
import styles from '../App.module.css';
import ObjectCard from "./objectCard";
import ObjectDataPane from "./objectData";
import objectDataBase from "./dataBase";
import { ObjectDataProps } from "./objectData";
import { inspectBigCell } from "../scripts/animation";

const InspectorPane: Component = (props) => {
  const [objectData, setObjectData] = createSignal<ObjectDataProps>({ title: '', data: '', active: false });
  // const [showObjectData, setShowObjectData] = createSignal<boolean>(false);
  const setDataAndShow = (title: string) => {
    //@ts-ignore
    setObjectData({ ...objectDataBase[title], active: true, });
  }

  const RBCHealthyAnim = () => {
    setDataAndShow('Red Blood Cell (Healthy)')
  }

  const RBCAnaemicAnim = () => {
    setDataAndShow('Red Blood Cell (Anaemic)')
    inspectBigCell();
  }

  const haemoglobinAnim = () => {
    setDataAndShow('Haemoglobin')
    // inspectBigCell();
  }


  return (
    <div class={styles.inspectorPaneWrapper}>
      <div class={styles.inspectorPane}>
        <button id="inspectorBackButton" class={styles.backButton}> {'< Back'} </button>
        <div class={styles.objectGrid}>
          <ObjectCard title='Red Blood Cell (Healthy)' onClick={RBCHealthyAnim} image='' />
          <ObjectCard title='Red Blood Cell (Anaemic)' onClick={RBCAnaemicAnim} image='' />
          <ObjectCard title='Haemoglobin' onClick={haemoglobinAnim} image='' />
          <ObjectCard title='Sickle Cell' onClick={() => setDataAndShow('Sickle Cell')} image='' />
        </div>
      </div>
      <ObjectDataPane data={objectData().data} title={objectData().title} active={objectData().active} />
    </div>
  )
}

export default InspectorPane;