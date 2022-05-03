import { FeedbackType, feedbackTypes } from '..';
import { CloseButton } from '../../CloseButton';

interface Props {
	setFeedbackType: (type: FeedbackType) => void;
}

export function Escolha({ setFeedbackType }: Props) {
	return (
		<>
			<header className="flex flex-row items-stretch">
				<span className="text-xl leading-6">DEIXE SEU FEEDBACK</span>
				<CloseButton />
			</header>
			<div className="flex py-8 gap-2 w-full">
				{Object.entries(feedbackTypes).map(([key, current]) => {
					return (
						<button
							className="bg-zinc-700 rounded-lg py-5 w-24 flex flex-col items-center border-2 border-transparent hover:border-red-700 focus:border-red-700 focus:outline-none"
							key={key}
							onClick={() => setFeedbackType(key as FeedbackType)}
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
		</>
	);
}
