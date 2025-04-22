import { usePageTitle } from "@/shared/lib/hooks/usePageTitle";

const AboutProjectComponent = () => {
  usePageTitle("O Projeto");
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">
        Projeto de Avaliação – Vaga Front-End Sênior (React)
      </h1>

      <p className="mb-8">
        Este projeto foi desenvolvido como parte do processo seletivo para a
        posição de <strong>Desenvolvedor Front-End Sênior (React)</strong>. A
        proposta é demonstrar conhecimento técnico em componentes, gerenciamento
        de estado, formulários e boas práticas com React moderno.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Visão Geral</h2>
      <p className="mb-8">
        A aplicação é composta por <strong>duas páginas principais</strong>:
      </p>

      <h3 className="text-xl font-semibold mb-2">Página de Cadastro</h3>
      <ul className="list-disc list-inside mb-6">
        <li>
          <strong>Formulário customizado</strong>: construído do zero, sem libs
          como React Hook Form ou Formik.
        </li>
        <li>
          <strong>Gerenciamento de estado via props</strong> entre componentes,
          sem uso de Context API ou ferramentas globais.
        </li>
        <li>
          <strong>Máscaras dinâmicas</strong> (CPF, CNPJ, CEP, Telefone)
          implementadas manualmente, com hook próprio reutilizável.
        </li>
        <li>
          <strong>Validação com Zod</strong>, incluindo validações condicionais
          de CPF/CNPJ baseadas no tipo de pessoa.
        </li>
        <li>
          <strong>Form Arrays</strong> para adicionar/remover blocos dinâmicos.
        </li>
        <li>Conversão e tratamento de dados antes do envio.</li>
      </ul>
      <p className="mb-8">
        <strong>Objetivo técnico</strong>: mostrar conhecimento sobre o
        formulário e a estrutura de dados sem depender de bibliotecas externas.
      </p>

      <h3 className="text-xl font-semibold mb-2">Página de Filmes</h3>
      <ul className="list-disc list-inside mb-6">
        <li>
          <strong>Gerenciamento de estado com Zustand</strong>, ideal para
          cenários mais complexos.
        </li>
        <li>
          <strong>Filtros com Query Params</strong> persistentes na URL.
        </li>
        <li>
          <strong>useCallback</strong> para evitar re-renderizações
          desnecessárias.
        </li>
        <li>
          <strong>Lazy Load de imagens</strong> — carregadas apenas quando
          entram na área visível.
        </li>
        <li>Exibição de: imagem, título e descrição.</li>
      </ul>
      <p className="mb-8">
        <strong>Objetivo técnico</strong>: mostrar fluência com ferramentas
        modernas, renderização otimizada e controle da URL com{" "}
        <code>react-router-dom</code>.
      </p>

      <h3 className="text-xl font-semibold mb-2">Tecnologias Utilizadas</h3>
      <ul className="list-disc list-inside mb-8">
        <li>React + Vite</li>
        <li>Zustand</li>
        <li>Zod</li>
        <li>Axios</li>
        <li>TypeScript</li>
        <li>TailwindCSS</li>
      </ul>

      <h3 className="text-xl font-semibold mb-2">Considerações</h3>
      <p className="mb-4">
        O projeto prioriza{" "}
        <strong>
          simplicidade, clareza e controle total do fluxo de dados
        </strong>
        . Cada parte foi pensada para refletir boas práticas, código limpo e
        entendimento técnico do ecossistema React.
      </p>
    </div>
  );
};

export default AboutProjectComponent;
