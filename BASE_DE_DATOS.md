CREATE TABLE proveedor (
    id SERIAL PRIMARY KEY,
    personaLegal VARCHAR(50) NOT NULL,
    registro VARCHAR(3) NOT NULL,
	numeroPegistro varchar (30) not null,
    nombreCompania VARCHAR(255) NOT NULL,
    representantelegal VARCHAR(255) NOT NULL,
    numeroContacto VARCHAR(10) NOT NULL,
    gmailContacto VARCHAR(255) NOT NULL,
    ciudad_id INT NOT NULL,
    pais_id INT NOT NULL,
    departamento_id INT NOT NULL,
    direccion varchar(255) NOT NULL,
    archivo VARCHAR(555) NOT NULL,
    FOREIGN KEY (ciudad_id) REFERENCES ciudades(id),
    FOREIGN KEY (pais_id) REFERENCES paises(id),
    FOREIGN KEY (departamento_id) REFERENCES departamentos(id)
);
CREATE TABLE ciudades (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL
);
CREATE TABLE paises (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL
);
CREATE TABLE departamentos (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL
);

INSERT INTO paises (nombre) VALUES ('Colombia'), ('Perú'), ('Chile');

INSERT INTO departamentos (nombre) VALUES ('Cundinamarca'), ('Antioquia'), ('Valle del Cauca');

INSERT INTO ciudades (nombre) VALUES ('Bogotá'), ('Medellín'), ('Cali');
