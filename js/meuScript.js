var app = new function() {

    this.elemento = document.getElementById('paises');

    this.paises = ['Brasil', 'Uruguai', 'Argentina', 'Paraguai', 'Venezuela', 'Bolivia', 'Chile', 'Colombia'];

    this.Contar = function(data) {

        var elemento = document.getElementById('contador');
        var nome = 'pais';

        if (data) {
            if (data > 1) {
                nome = 'paises';
            }
            elemento.innerHTML = data + ' ' + nome;
        } else {
            elemento.innerHTML = 'Não ' + nome;
        }
    };

    this.buscarTodos = function() {
        var data = '';

        if (this.paises.length > 0) {
            for (i = 0; i < this.paises.length; i++) {

                data += '<tr>';
                data += '<td>' + this.paises[i] + '</td>';
                data += '<td><button onclick="app.Editar(' + i + ')">Editar</button></td>';
                data += '<td><button onclick="app.Deletar(' + i + ')">Deletar</button></td>';
                data += '</tr>';
            }
        }

        this.Contar(this.paises.length);

        return this.elemento.innerHTML = data;
    };

    this.Adicionar = function() {
        this.elemento = document.getElementById('add_nome');

        var pais = this.elemento.value;

        if (pais) {

            this.paises.push(pais.trim());

            this.elemento.value = '';

            this.buscarTodos();
        }
    };

    this.Editar = function(item) {
        var elemento = document.getElementById('editar_nome');

        elemento.value = this.paises[item];

        document.getElementById('spoiler').style.display = 'block';
        self = this;

        document.getElementById('salvarEditar').onsubmit = function() {
            var pais = elemento.value;

            if (pais) {
                self.paises.splice(item, 1, pais.trim());
                self.buscarTodos();

                FecharEntrada();
            }
        }
    };

    this.Deletar = function(item) {
        this.paises.splice(item, 1);
        this.buscarTodos();
    };
}

app.buscarTodos();

function FecharEntrada() {
    document.getElementById('spoiler').style.display = 'none';
}