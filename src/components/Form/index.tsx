import { useState } from 'react';

import { Escolha } from './Passos/Escolha';

import minhocaUrl from '../../assets/minhoca.svg';
import lampadaUrl from '../../assets/lampada.svg';
import nuvemUrl from '../../assets/nuvem.svg';
import { Conteudo } from './Passos/Conteudo';

export const feedbackTypes = {
	BUG: {
		name: 'Problema',
		icon: { source: minhocaUrl, alt: 'Imagem de uma minhoca' },
	},
	IDEA: {
		name: 'Idéia',
		icon: { source: lampadaUrl, alt: 'Imagem de uma lâmpada' },
	},
	OTHER: {
		name: 'Outro',
		icon: { source: nuvemUrl, alt: 'Imagem de uma nuvem' },
	},
};

export type FeedbackType = keyof typeof feedbackTypes;

export function Form() {
	const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);

	function handleRestartFeedback() {
		setFeedbackType(null);
	}

	return (
		<div className="bg-zinc-800 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
			{!feedbackType ? (
				<Escolha setFeedbackType={setFeedbackType} />
			) : (
				<Conteudo
					feedbackType={feedbackType}
					onFeedbackRestart={handleRestartFeedback}
				/>
			)}
			<footer className="text-xs text-neutral-400">
				Feito por pelo dev{' '}
				<a
					className="underline underline-offset-2"
					href="https://github.com/vitor93gs"
				>
					Vitor!
				</a>
			</footer>
		</div>
	);
}
