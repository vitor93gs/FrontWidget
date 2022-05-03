import { ArrowLeft } from 'phosphor-react';
import { FeedbackType, feedbackTypes } from '..';
import { CloseButton } from '../../CloseButton';

interface Props {
	feedbackType: FeedbackType;
	onFeedbackRestart: () => void;
}

export function Conteudo({ feedbackType, onFeedbackRestart }: Props) {
	const feedbackTypeInfo = feedbackTypes[feedbackType];
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
					className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-red-700 focus:ring-red-700 focus:ring-2 resize-none focus:outline-none"
					placeholder="Conte com detalhes o que acontece com o senhor, jovem gafanhoto..."
				/>
			</form>
		</>
	);
}
