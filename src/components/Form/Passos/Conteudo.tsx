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
				<button type="button" className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100" onClick={onFeedbackRestart}>
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
			<div className="flex py-8 gap-2 w-full"></div>
		</>
	);
}
