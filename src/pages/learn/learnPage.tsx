import { type Component, onMount, Index, createSignal, Show } from 'solid-js';
import styles from '../../App.module.css';
import rbcBanner from '../../assets/objectPngs/rbcPreviewbanner.png'
import AnimationsController from '../../scripts/animation';
import { micromark } from 'micromark';
import { A } from '@solidjs/router';

interface link {
    label: string, dest: string, banner?: string
}

const links: { name: string, links: link[] }[] = [
    {
        name: 'Cells',
        links: [
            { label: 'Red Blood Cells', dest: '/red-blood-cells', banner: rbcBanner },
            { label: 'White Blood Cells', dest: '/white_blood_cells' },
            { label: 'Platelets', dest: '/platelets' },
            { label: 'Plasma', dest: '/p[lasma' },
        ]
    },
    {
        name: 'Conditions',
        links: [
            { label: 'Leukemia', dest: '/leukemia' },
            { label: 'Anaemia', dest: '/anaemia' },
        ]
    },
];


const Learn: Component = () => {
    const [preview, setPreview] = createSignal<link | null>(links[0].links[0]);
    const controller = AnimationsController.getInstance();

    onMount(() => {
        controller.TransitionToLearn();
    });

    const blur = (link: link) => {
        setPreview(link);
        console.log(preview());
        controller.BlurLearnBackground();
    };
    const unBlur = () => { controller.RevertBlurLearn(); setPreview(null) };
    // const unBlur = () => controller.RevertBlurLearn()


    return (
        <div class={`${styles.belowNav} ${styles.learn}`} style={{ display: 'flex' }} >
            <div class={styles.learnPageContents} style={{ background: 'rgba(0,0,0,.75)', padding: '20px' }} onMouseLeave={unBlur}>
                <div>
                    <h1 class={styles.heading}>LEARN</h1>
                    <Index each={links}>
                        {(section, index) => (
                            <ul>
                                <li class={styles.subheading}> {section().name}</li>
                                <ul class={styles.subsubheading}>
                                    <Index each={section().links}>
                                        {(link, index) => (
                                            <li
                                                onMouseEnter={() => blur(link())}
                                                class={styles.learnLinks}
                                                style={{ width: 'min-content', "white-space": 'nowrap' }}>
                                                <A class={styles.learnLinks} href={link().dest}>
                                                    {link().label}
                                                </A>
                                            </li>
                                        )}
                                    </Index>
                                </ul>
                            </ul>
                        )}
                    </Index>
                </div>
                <div style={{ width: '100%', }}>
                    <Show when={preview()} fallback={<div class={styles.learnPreview}>Each section of will teach you about a condition or cell type. <br />Hover for a preview.</div>}>
                        <div class={styles.learnPreview} style={{ width: '100%', height: '100%', background: 'rgba(0,0,0,.4)', }}>

                            <div style={{ width: '100%', height: '200px', position: 'relative' }}>
                                <img src={preview()?.banner} style={{
                                    width: '100%', height: '100%', "object-fit": 'cover',
                                    filter: 'brightness(0.2)'
                                }} />
                                <h1 class={styles.learnPreviewHeader}>{preview()?.label.toUpperCase()}</h1>
                            </div>
                            <div style={{ padding: '20px' }} innerHTML={micromark(`### **Intro**
**Red Blood Cells (RBCs)**, the unassuming yet indispensable components of our bloodstream, play a pivotal role in the intricate dance of oxygen delivery and waste removal that sustains human life. Within each of these tiny cells resides a remarkable substance known as hemoglobin, a molecular marvel that transforms RBCs into efficient oxygen carriers.

### **Structural Simplicity and Efficiency**

Red blood cells are unique among cells in the human body due to their lack of a nucleus and organelles. This absence provides more space for hemoglobin, the primary cargo of these cells. Structurally, a mature RBC resembles a biconcave disc, optimizing its surface area for the efficient exchange of gases.

### **Hemoglobin in Action**

At the heart of each red blood cell is hemoglobin, a protein specially designed for oxygen transport. Hemoglobin binds to oxygen in the lungs, forming oxyhemoglobin, and releases it in oxygen-deficient tissues. This reversible binding enables red blood cells to serve as oxygen couriers, shuttling the life-sustaining gas to every nook and cranny of the body.

`)}></div>
                        </div>
                    </Show>
                </div>
            </div>
        </div >
    );
};

export default Learn;