import { usePageTitle } from "@/shared/lib/hooks/usePageTitle";

const AboutElvioComponent = () => {
  usePageTitle("Curriculum");
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-4">Elvio Castro Barbosa</h1>
      <h2 className="text-2xl font-semibold mb-6">Front-end Developer</h2>

      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-2">Resumo</h3>
        <p>
          Desenvolvedor front-end com ampla experiência em Angular, React e
          design UX, criação de interfaces de usuário eficientes e de alto
          desempenho. Experiência em gerenciar e orientar equipes de
          desenvolvimento, garantindo código de qualidade e padrões de
          desempenho. Experiente em marketing e estratégia digital, com
          histórico de campanhas publicitárias bem-sucedidas e otimizações de
          processos. Apaixonado por construir soluções escaláveis e melhorar
          fluxos de trabalho de desenvolvimento.
        </p>
      </section>

      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-2">Conhecimento</h3>
        <ul className="list-disc list-inside">
          <li>
            <strong>Front-end:</strong> Angular, React.js, Vue.js, Next.js,
            TypeScript, JavaScript, Unit Tests (Jasmine), Webpack, jQuery,
            HTML5, CSS, SASS, LESS
          </li>
          <li>
            <strong>Leadership:</strong> Code Review, Quality Assurance,
            Performance Optimization, Agile
          </li>
          <li>
            <strong>CMS & Backend:</strong> WordPress (ACF, Gutenberg), PHP,
            SQL, MySQL, Nest.js, Java
          </li>
          <li>
            <strong>UI/UX:</strong> Wireframing, Prototyping, Adobe XD, Figma
          </li>
          <li>
            <strong>Outros:</strong> Python, XML, SEO, Power BI, Adobe
            Illustrator/Photoshop
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">
          Experiência Profissional
        </h2>
        <div className="mb-4">
          <h4 className="font-semibold text-xl">
            Maps Financial – Front-end Developer | Angular (2023 - atual)
          </h4>
          <ul className="list-disc list-inside">
            <li>
              Desenvolvimento de interfaces com Angular 8, 14 e 17 focadas em
              performance e responsividade.
            </li>
            <li>
              Melhoria da arquitetura base, aumentando produtividade em 40%.
            </li>
            <li>
              Criação de componentes, pipes e serviços reutilizáveis, reduzindo
              erros e mantendo os padrões de codificação.
            </li>
            <li>
              Otimização de performance da aplicação implementando Virtual
              Scrolling para lidar com listas de dados extensas.
            </li>
          </ul>
          <ul className="list-disc list-inside mt-3">
            <strong>Principais Responsabilidades e Contribuições</strong>
            <li>
              Qualidade de Código: Seguindo padrões de qualidade escrevendo
              código limpo, escalável e de fácil manutenção.
            </li>
            <li>
              Boas Práticas: Seguindo as melhores práticas do setor, incluindo
              design modular, code reviews e controle de versão.
            </li>
            <li>
              Organização do Projeto: Contribuição ativa para definição e
              melhoria de processos e padrões de desenvolvimento.
            </li>
            <li>
              Otimização de Performance: Otimização e performance das telas para
              garantir interações rápidas e responsivas. Integração com APIs:
              Integração com APIs complexas de forma eficiente, assegurando
              interações de dados confiáveis e estáveis.
            </li>
          </ul>
        </div>
        <div className="mb-4 mt-8">
          <h4 className="font-semibold text-xl">
            Fuerza Studio – Front-end Technical Lead | WordPress (2021 - 2023)
          </h4>
          <ul className="list-disc list-inside">
            <li>
              Liderança de equipe de front-end garantindo qualidade e
              performance.
            </li>
            <li>Implementação code reviews e testes, reduzindo bugs.</li>
            <li>
              Criação de componentes reutilizáveis, otimizando processos de
              desenvolvimento.
            </li>
          </ul>
        </div>
        <div className="mb-4 mt-8">
          <h4 className="font-semibold text-xl">
            Carbono Digital – Art Director | UX Designer | WordPress (2016 -
            2021)
          </h4>
          <ul className="list-disc list-inside">
            <li>Criação de campanhas digitais e UIs para sites e apps.</li>
            <li>
              Gerenciamento de projetos e implementei automações para
              otimização.
            </li>
            <li>
              Desenvolvimento de vários sites e ações interativas, como a
              primeira vitrine virtual do Norte/Nordeste.
            </li>
            <li>
              Finalista no Clube de Criação de SP com a peça "Opções da Mrh".
            </li>
          </ul>
        </div>
        <div className="mb-4 mt-8">
          <h4 className="font-semibold text-xl">
            Araújo e Brilhante Group – Digital Marketing Strategist (2011 -
            2016)
          </h4>
          <ul className="list-disc list-inside">
            <li>Campanhas de marketing digital para marcas de moda.</li>
            <li>Aumento da visibilidade e vendas com ações promocionais.</li>
            <li>Prêmio marcas de moda mais conhecida do Ceará (2012, 2013).</li>
            <li>
              Em 2 anos junto a equipe de marketing dobramos o número de pontos
              de venda no Brasil.
            </li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-2">Educação</h3>
        <p>
          Bacharelado em Ciência da Computação (Incompleto) – Universidade
          Estácio de Sá
        </p>
      </section>

      <section>
        <h3 className="text-2xl font-semibold mb-2">Cursos Recentes</h3>
        <ul className="list-disc list-inside">
          <li>Java and Spring Boot (2024) – Udemy</li>
          <li>Next.JS / Node / ReactJs / Typescript (2022) – Rocket City</li>
          <li>Creating Prototype Design (2019) – Udacity</li>
          <li>Power BI and Data Science (2019) – Data Science Academy</li>
          <li>
            Intro to I.A and Machine Learning (2018-2019) – Udacity Nanodegree
          </li>
          <li>Digital Planning (2018) – Curso com profissionais locais</li>
        </ul>
      </section>
    </div>
  );
};

export default AboutElvioComponent;
