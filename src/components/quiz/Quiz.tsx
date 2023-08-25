import { Component, For } from "solid-js";
import { QuizQuestion } from "../../scripts/quizQuestions";


const Quiz: Component<QuizQuestion> = (Q) => {

    return (
        <div id='quizPanel' style={{ height: '80%', width: '100vw', position: 'absolute', "z-index": 2, "margin": 'auto' }}>
            <p style={{ margin: '80px 10vw', "text-align": 'center' }}>
                {Q.question}
            </p>
            <div style={{ display: 'grid', "grid-template-columns": '1fr '.repeat(Q.options.length), gap: '50px', 'margin': 'auto', width: '1000px' }}>
                <For each={Q.options}>
                    {(opt, i) =>
                        <button>
                            {`${opt}`}
                        </button>
                    }
                </For>
            </div>
        </div>
    )
}

export default Quiz;