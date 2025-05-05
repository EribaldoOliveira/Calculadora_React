import Calculator from './components/Calculator.jsx'

import './App.css'

function App() {

  return (
    <>
      <Calculator />
      <footer class="rodape">
    <div class="rodape-conteudo">
      <h2>Eribaldo dos Santos Oliveira</h2>
    
      <div class="contato-whatsapp">
        <a href="https://wa.me/5579988035219?text=Olá%2C%20vi%20seu%20portfólio%20e%20gostaria%20de%20conversar!" target="_blank" rel="noopener noreferrer" class="btn-whatsapp" aria-label="Conversar pelo WhatsApp">
          <i class="fab fa-whatsapp"></i> Fale comigo no WhatsApp: (79) 9 8803-5219
        </a>
      </div>
      <nav aria-label="Links sociais">
        <p class="links">
          🔗 <a href="https://github.com/EribaldoOliveira" target="_blank" rel="noopener noreferrer">GitHub</a> |
          🔗 <a href="https://www.linkedin.com/in/eribaldo-oliveira/" target="_blank" rel="noopener noreferrer">LinkedIn</a> |
          🌐 <a href="https://meuportfoli0.com" target="_blank" rel="noopener noreferrer">Portfólio</a>
        </p>
      </nav>
   
    </div>
   
  </footer>
    </>
  )
}

export default App