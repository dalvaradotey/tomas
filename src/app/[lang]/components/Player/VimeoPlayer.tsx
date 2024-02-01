import { FC, HTMLAttributes, memo, useMemo } from "react"

type Props = HTMLAttributes<HTMLIFrameElement> & {
	videoId: string
}

const PLAYER_WIDTH = 350
const PLAYER_HEIGHT = 624

const VimeoPlayer: FC<Props> = ({ videoId }) => {
	const source = useMemo(() => {
		return `https://player.vimeo.com/video/${videoId}?h=0b55f13eda&autoplay=1`
	}, [videoId])

	const allows = useMemo(() => (
		"autoplay; fullscreen; picture-in-picture"
	), [])

	return (
	<iframe src={source} width={PLAYER_WIDTH} height={PLAYER_HEIGHT} allow={allows} allowFullScreen style={{ aspectRatio: 3/8 }} />
	)
}

export default memo(VimeoPlayer)