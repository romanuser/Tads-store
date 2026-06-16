import { Vitrine } from '../components/produto/Vitrine'
import { Buscador } from '../components/produto/Buscador'
import { useProdutos } from '../hooks/useProdutos'

export function PaginaInicial() {
  const {
    produtos, carregando, erro,
    categorias, categoriaSelecionada, setCategoriaSelecionada,
    busca, setBusca,
    filtrosAtivos, limparFiltros,
  } = useProdutos()

  return (
    <>
      <Buscador
        busca={busca}
        setBusca={setBusca}
        categorias={categorias}
        categoriaSelecionada={categoriaSelecionada}
        setCategoriaSelecionada={setCategoriaSelecionada}
        filtrosAtivos={filtrosAtivos}
        limparFiltros={limparFiltros}
      />
      <Vitrine
        produtos={produtos}
        carregando={carregando}
        erro={erro}
        busca={busca}
        categoriaSelecionada={categoriaSelecionada}
      />
    </>
  )
}
