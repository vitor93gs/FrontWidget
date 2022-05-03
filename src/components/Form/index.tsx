import { useState } from 'react';

import { CloseButton } from '../CloseButton';

import minhocaUrl from '../../assets/minhoca.svg';
import lampadaUrl from '../../assets/lampada.svg';
import nuvemUrl from '../../assets/nuvem.svg';

const feedbackTypes = {
	BUG: {
		name: 'Problema',
		icon: { source: minhocaUrl, alt: 'Imagem de uma minhoca' },
	},
	IDEA: {
		name: 'Ideia',
		icon: { source: lampadaUrl, alt: 'Imagem de uma lâmpada' },
	},
	OTHER: {
		name: 'Outro',
		icon: { source: nuvemUrl, alt: 'Imagem de uma nuvem' },
	},
};

type FeedbackType = keyof typeof feedbackTypes;

export function Form() {
	const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);

	return (
		<div className="bg-zinc-800 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
			<header className="flex flex-row items-stretch">
				<span className="text-xl leading-6">DEIXE SEU FEEDBACK</span>
				<CloseButton />
			</header>
			{!feedbackType ? (
				<div className="flex py-8 gap-2 w-full">
					{Object.entries(feedbackTypes).map(([key, current]) => {
						return (
							<button
								className="bg-zinc-700 rounded-lg py-5 w-24 flex flex-col items-center border-2 border-transparent hover:border-red-700 focus:border-red-700 focus:outline-none"
								key={key}
								onClick={() =>
									setFeedbackType(key as FeedbackType)
								}
								type="button"
							>
								<img
									src={current.icon.source}
									alt={current.icon.alt}
								/>
								<span>{current.name}</span>
							</button>
						);
					})}
				</div>
			) : (
				<span>UELITO</span>
			)}
			<footer className="text-xs text-neutral-400">
				Feito por{' '}
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
