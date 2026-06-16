import { useState, useEffect } from 'react'

const BASE = 'https://dummyjson.com'

export function useProdutos() {
  const [produtos,             setProdutos]             = useState([])
  const [categorias,           setCategorias]           = useState([])
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('')
  const [busca,                setBusca]                = useState('')
  const [carregando,           setCarregando]           = useState(true)
  const [erro,                 setErro]                 = useState(null)

  // Carrega lista de categorias uma vez
  useEffect(() => {
    fetch(`${BASE}/products/categories`)
      .then(r => r.json())
      .then(data => setCategorias(Array.isArray(data) ? data : []))
      .catch(() => {})
  }, [])

  // Busca produtos com debounce de 400ms
  useEffect(() => {
    const controller = new AbortController()

    const timer = setTimeout(() => {
      setCarregando(true)
      setErro(null)

      let url
      if (busca.trim()) {
        url = `${BASE}/products/search?q=${encodeURIComponent(busca.trim())}&limit=20`
      } else if (categoriaSelecionada) {
        url = `${BASE}/products/category/${categoriaSelecionada}?limit=20`
      } else {
        url = `${BASE}/products?limit=20`
      }

      fetch(url, { signal: controller.signal })
        .then(r => {
          if (!r.ok) throw new Error(`Erro ${r.status}`)
          return r.json()
        })
        .then(data => {
          setProdutos(data.products ?? [])
          setCarregando(false)
        })
        .catch(err => {
          if (err.name === 'AbortError') return
          setErro('Não foi possível carregar os produtos. Verifique sua conexão.')
          setCarregando(false)
        })
    }, busca ? 400 : 0) // debounce só na busca por texto

    return () => {
      clearTimeout(timer)
      controller.abort()
    }
  }, [busca, categoriaSelecionada])

  function limparFiltros() {
    setBusca('')
    setCategoriaSelecionada('')
  }

  const filtrosAtivos = !!(busca.trim() || categoriaSelecionada)

  return {
    produtos,
    categorias,
    categoriaSelecionada, setCategoriaSelecionada,
    busca,               setBusca,
    carregando,
    erro,
    filtrosAtivos,
    limparFiltros,
  }
}
