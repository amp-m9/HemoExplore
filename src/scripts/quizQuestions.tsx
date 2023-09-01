import { JSX } from "solid-js";
import Quiz from "../components/quiz/Quiz";
import { getRandom } from "./animation";
import { createComponent, render } from "solid-js/web";

let quiz: JSX.Element;
let timeline: gsap.core.Timeline;
const quizQuestions: QuizQuestion[] = new Array<QuizQuestion>(5);
export interface QuizQuestion {
    question: string;
    options: string[];
    answer: number;
}

export function initQuiz() {
    for (let i = 0; i < Quiz.length; i++) {
        const element: QuizQuestion = {
            question: `Test question no.${i + 1}`,
            options: ['choice 1', 'choice 2'],
            answer: Math.round(getRandom(0, 1))
        }
        quizQuestions[i] = element;
    }
    console.log(quizQuestions)
    buildTimeline();
}

export function showQuestion(i: number) {
    quiz = createComponent((prop) => <Quiz {...prop} />, quizQuestions[i])
    render(() => (quiz), document.body)
}

export function exitQuiz() {
    document.getElementById('quizPanel')?.remove()
}

function buildTimeline() {
    timeline = gsap.timeline();
}