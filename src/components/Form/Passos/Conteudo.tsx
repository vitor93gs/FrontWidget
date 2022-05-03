import { ArrowLeft, Camera, Target } from 'phosphor-react';
import { FormEvent, useState } from 'react';
import { FeedbackType, feedbackTypes } from '..';
import { CloseButton } from '../../CloseButton';
import { BotaoScreenshot } from './BotaoScreenshot';

interface Props {
	feedbackType: FeedbackType;
	onFeedbackRestart: () => void;
	onFeedbackSent: () => void;
}

export function Conteudo({
	feedbackType,
	onFeedbackRestart,
	onFeedbackSent,
}: Props) {
	const feedbackTypeInfo = feedbackTypes[feedbackType];
	const [screenshot, setScreenshot] = useState<string | null>(null);
	const [comment, setComment] = useState('');

	function handleSubmitFeedback(event: FormEvent) {
		event.preventDefault();
		console.log({ screenshot, comment });
		onFeedbackSent();
	}

	return (
		<>
			<header>
				<button
					type="button"
					className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100"
					onClick={onFeedbackRestart}
				>
					<ArrowLeft weight="bold" className="h-4 w-4" />
				</button>
				<span className="text-xl leading-6 flex items-center gap-2">
					<img
						src={feedbackTypeInfo.icon.source}
						alt={feedbackTypeInfo.icon.alt}
						className="w-6 h-6"
					/>
					{feedbackTypeInfo.name}
				</span>
				<CloseButton />
			</header>
			<form className="my-4 w-full">
				<textarea
					className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-red-700 focus:ring-red-700 focus:ring-2 resize-none focus:outline-none scrollbar scrollbar-thumb-zinc-700 scrollbar-track-transparent"
					placeholder="Conte com detalhes o que acontece com o senhor, jovem gafanhoto..."
					onChange={(event) => setComment(event.target.value)}
				/>
				<footer className="flex gap-2 mt-2">
					<BotaoScreenshot
						onScreenshot={setScreenshot}
						screenshot={screenshot}
					/>
					<button
						type="submit"
						className="p-2 bg-red-700 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-red-700 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-red-700"
						onClick={handleSubmitFeedback}
						disabled={comment.length === 0}
					>
						Enviar DEDADA
					</button>
				</footer>
			</form>
		</>
	);
}
