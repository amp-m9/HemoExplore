import { gsap } from "gsap/gsap-core";

const intro = "Welcome to HemoExplore's immersive journey through the bloodstream, where you'll embark on a remarkable adventure alongside a red blood cell, discovering the secrets of oxygen transport and understanding the impact of anaemia. Let's begin.";
const part1_1 = "As we journey through these vibrant vessels, remember that every heartbeat propels our blood, enriching it with oxygen in the lungs and distributing it to every corner of our body.";
const part1_2 = "Our voyage takes us to the incredible world of oxygen and its vital partnership with red blood cells. Imagine each red blood cell as a dedicated courier, delivering precious oxygen to our tissues and cells.";

const part2_1 = "Moving forward, let's explore the process of oxygen exchange. In the lungs, oxygen binds with hemoglobin within red blood cells, forming a partnership that will sustain us throughout our journey.";

const part3_1 = "Narrator: As we continue, let's delve into the causes of anaemia. Anaemia occurs when our body lacks enough healthy red blood cells or hemoglobin to carry sufficient oxygen.";

export namespace journey {
    let timeline: gsap.core.Timeline;
    let utterance: SpeechSynthesisUtterance;
    let controller: AbortController;
    let index = 0;

    export function init() {
        timeline = gsap.timeline();
        utterance = new SpeechSynthesisUtterance();
        controller = new AbortController();
        utterance.voice = window.speechSynthesis.getVoices()[0];
    }

    export function start() {
        const speech = convertStringToSubtitleArray(intro);
        console.log(speech);
        narrate(speech, partOneOxygen);

    }

    function partOneOxygen() {
        const speech = convertStringToSubtitleArray(part1_1);
        setTimeout(() => console.log('(begin animation)'), 1000);
        narrate(
            speech, () => {
                setSubtitles('(play animation showing oxygen molecules attaching to hemoglobin)')
                setTimeout(() => narrate(convertStringToSubtitleArray(part1_2), partTwoLungs), 2000)
            });
    }

    function partTwoLungs() {
        const speech = convertStringToSubtitleArray(part2_1);
        narrate(speech, () => {
            setSubtitles('(Users witness the oxygen and hemoglobin interaction in the lungs. and answer quiz Q)');
            setTimeout(partThreeCausesOfAnaemia, 5000);

        })
    }

    function partThreeCausesOfAnaemia() {
        const speech = convertStringToSubtitleArray(part3_1);
        narrate(speech);
    }
    export function stopAndQuit() {
        window.speechSynthesis.pause()
        window.speechSynthesis.cancel()
        controller.abort();
    }



    function narrate(speech: string[], onEnd?: () => any) {
        index = 0;
        utterance.text = speech[index];
        controller = new AbortController();
        utterance.addEventListener('end', setUtterance(speech, onEnd), { signal: controller.signal })
        window.speechSynthesis.speak(utterance);
        setSubtitles(utterance.text);
    }

    function setUtterance(textArr: string[], onEnd?: () => any) {
        return () => {
            setSubtitles('')
            index = index + 1;
            if (!(index < textArr.length)) {
                controller.abort();
                if (typeof onEnd !== 'undefined')
                    onEnd();
                return;
            }
            utterance.text = textArr[index];
            window.speechSynthesis.speak(utterance);
            setSubtitles(utterance.text);
        };
    }

    function setSubtitles(text: string) {
        const p = document.getElementById('subtitles') as HTMLParagraphElement;
        if (text.trimEnd().trimStart().length == 0)
            p.style.display = 'none';

        else
            p.style.display = 'block';


        p.innerHTML = text;
    }

}

function convertStringToSubtitleArray(string: string) {
    return string.split(/([.])/).filter(i => { return i !== '.' && i !== '' }).map(s => s.trimEnd().trimStart() + '.');
}