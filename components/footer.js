import Container from './container'

export default function Footer() {
  return (
    <footer className="bg-brand-900 text-gray-200">
      <Container>
        <div className="pt-16 pb-10 px-4 md:px-6 max-w-2xl mx-auto font-light break-words">
          <p>
          Der Mosaik Academy Blog soll dir dabei helfen im Glauben zu wachsen, die Bibel besser zu verstehen und deine Berufung zu leben.
          </p>
          <div className="flex items-center mt-6">
            <svg className="h-8 mr-6 text-gray-200" viewBox="100 -80 315 315" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="1.414"><path fill="currentColor" d="M313.837 168.346c1.255 0 2.461-1.323 2.207-2.53L281.377 11.457c-.394-1.743-2.392-2.3-3.553-1.139L123.097 164.756c-1.28 1.338-.443 3.562 1.477 3.59h189.263zM206.097 72.957c.696-.696.835-2.066-.07-2.972l-59.479-59.596c-1.137-1.138-3.249-1.046-3.714 1.276L107.791 165.79c-.512 2.229 2.205 3.343 3.618 1.923l94.688-94.756z" fill="currentColor" /></svg>            
            <div className="flex space-x-4">
              <a className="border-b border-gray-800 hover:border-gray-600" href="/blog">Home</a>
              <a className="border-b border-gray-800 hover:border-gray-600" href="/">Mosaik Church</a>
              <a className="border-b border-gray-800 hover:border-gray-600" target="_blank" rel="noreferrer noopener" href="https://mosaik-stuttgart.net/impressum">Impressum</a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}
