export default function Boards({ params }: { params: { workspace: string } }) {
    return <h1>Boards: {params.workspace}</h1>;
}
