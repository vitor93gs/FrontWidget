export function Form() {
	return (
		<div className="bg-zinc-800 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
			<header className="flex flex-row items-stretch">
				<span className="text-xl leading-6">DEIXE SEU FEEDBACK</span>
				<button>X</button>
			</header>
			<p>MAIN</p>
			<footer className="text-xs text-neutral-400">
				Feito por Vitor!
			</footer>
		</div>
	);
}
