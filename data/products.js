// Importa o módulo 'fs' para manipulação de arquivos
import fs from 'fs';
// Importa o módulo 'path' para manipulação de caminhos de arquivos
import path from 'path';
// Importa a função 'fileURLToPath' do módulo 'url' para converter URLs em caminhos de arquivo
import { fileURLToPath } from 'url';

// Definindo __dirname para obter o diretório atual do arquivo
const __filename = fileURLToPath(import.meta.url); // Converte a URL do módulo atual em um caminho de arquivo
const __dirname = path.dirname(__filename); // Obtém o diretório do arquivo atual

// Função para ler produtos de arquivos JSON
const lerProdutos = () => {
    // Lê o arquivo 'notebooks.json' e o converte de JSON para um objeto JavaScript
    const notebooks = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'notebooks.json'), 'utf8'));
    // Lê o arquivo 'phones.json' e o converte de JSON para um objeto JavaScript
    const phones = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'phones.json'), 'utf8'));
    // Lê o arquivo 'derivados.json' e o converte de JSON para um objeto JavaScript
    const derivados = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'derivados.json'), 'utf8'));
    // Retorna todos os produtos combinando os três arrays
    return [...derivados, ...notebooks, ...phones];
};

// Função para salvar produtos em arquivos JSON
const salvarProdutos = (products) => {
    // Agrupando produtos por categoria para salvar em seus respectivos arquivos
    const notebooks = products.filter(product => product.category.includes('Notebook')); // Filtra produtos de 'Notebook'
    const phones = products.filter(product => product.category.includes('Smartphone')); // Filtra produtos de 'Smartphone'
    const derivados = products.filter(product => product.category.includes('Acessorios')); // Filtra produtos de 'Acessorios'

    // Salva o array de notebooks no arquivo 'notebooks.json' com formatação de 4 espaços
    fs.writeFileSync(path.resolve(__dirname, 'notebooks.json'), JSON.stringify(notebooks, null, 4));
    // Salva o array de phones no arquivo 'phones.json' com formatação de 4 espaços
    fs.writeFileSync(path.resolve(__dirname, 'phones.json'), JSON.stringify(phones, null, 4));
    // Salva o array de derivados no arquivo 'derivados.json' com formatação de 4 espaços
    fs.writeFileSync(path.resolve(__dirname, 'derivados.json'), JSON.stringify(derivados, null, 4));
};

// Exporta as funções 'lerProdutos' e 'salvarProdutos' para que possam ser utilizadas em outros módulos
export { lerProdutos, salvarProdutos };
