import html2canvas from 'html2canvas';
import { Camera } from 'phosphor-react';
import { useState } from 'react';
import { Loading } from '../../Loading';

interface Props {
    onScreenshot: (screenshot:string) => void
}

export function BotaoScreenshot({onScreenshot}:Props) {
	const [loading, setLoading] = useState(false);

	async function handleTakeScreenshot() {
		setLoading(true);
		const canvas = await html2canvas(document.querySelector('html')!);
		const base64image = canvas.toDataURL('image/png');
		onScreenshot(base64image);
		setLoading(false);
	}

	return (
		<button
			type="button"
			className="p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-red-700"
			onClick={handleTakeScreenshot}
		>
			{loading ? <Loading /> : <Camera className="h-6 w-6" />}
		</button>
	);
}
