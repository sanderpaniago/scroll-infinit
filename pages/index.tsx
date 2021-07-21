import { useEffect, useRef, useState } from "react"
import axios from 'axios'

import {Container, GlobalStyle} from '../styles/home'

export default function Home() {
  const observer = useRef(null)
  const [repos, setRepos] = useState([])
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(()=> {
    const perPage = 10;
    const endpoint = `https://api.github.com/users/sanderpaniago/repos`;
    const url = `${endpoint}?per_page=${perPage}&page=${currentPage}&order=DESC`
    axios.get(url).then((response) =>setRepos([...repos, ...response.data]))
  }, [currentPage])

  useEffect(()=> {
    const intersectionObserver = new IntersectionObserver(entries => {
      if(entries.some(entry => entry.isIntersecting)) {
        setCurrentPage((currentValue) => currentValue + 1)
      }
    })

    intersectionObserver.observe(observer.current)
    return () => intersectionObserver.disconnect()
  },[])

  return (
    <Container>
      <GlobalStyle />
      <ul>
        {repos.map(repo => {
          return (
            <li key={repo.id}>
              {repo?.name}
            </li>
          )
        })}
        <pre ref={observer}></pre>
      </ul>
    </Container>    
  )
}
