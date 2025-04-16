import { Description } from "./Description";
import "./styles.css"

export default async function WalksPage({ params }: { params: Promise<{ walk: string }> }) {
  const { walk } = await params;
  return (
    <Description title={walk} src={`/assets/service/${walk}.png`} alt={`Image of ${walk}`} />
  )
}
