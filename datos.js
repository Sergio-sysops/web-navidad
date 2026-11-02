// Para un cliente real, solo se cambia este archivo: textos, platos, precios y fechas.
// alergenos: gluten, crustáceos, huevo, pescado, cacahuete, soja, lácteos, frutos de cáscara,
// apio, mostaza, sésamo, sulfitos, altramuces, moluscos.
const LOCALES = {
  restaurante: {
    tema: "rojo", nombre: "Casa Aurelia", tipo: "Restaurante · Demo", lema: "Este año, de la cocina y la mesa nos ocupamos nosotros.",
    whatsapp: "34600000000", direccion: "Calle Mayor 12, tu ciudad", horario: "Comidas de 13:30 a 16:00 · Cenas de 20:30 a 23:30",
    tituloEncargos: "Para llevar a casa", textoEncargos: "Encarga con 48 horas y recoge el mismo día.",
    horas: ["13:30", "14:30", "15:00", "20:30", "21:30", "22:00"],
    menus: [
      { id: "empresa", nombre: "Comida de empresa", precio: 38, fechas: ["fines de semana y laborables de diciembre"], dias: "diciembre", platos: [
        ["Entrante", "Jamón ibérico con pan de cristal", ["gluten"]], ["Entrante", "Croquetas de carabinero", ["gluten", "crustáceos", "lácteos", "huevo"]],
        ["Principal", "Merluza al horno con refrito o carrillera al vino tinto", ["pescado", "sulfitos"]], ["Postre", "Tarta de queso y turrón", ["lácteos", "huevo", "frutos de cáscara"]]] },
      { id: "nochebuena", nombre: "Cena de Nochebuena", precio: 65, dias: ["12-24"], platos: [
        ["Entrante", "Consomé de ave al jerez", ["apio", "sulfitos"]], ["Entrante", "Langostinos a la plancha", ["crustáceos"]],
        ["Principal", "Cordero asado con patata panadera", []], ["Postre", "Tronco de Navidad", ["gluten", "huevo", "lácteos"]]] },
      { id: "nochevieja", nombre: "Cena de Nochevieja", precio: 79, dias: ["12-31"], platos: [
        ["Entrante", "Tartar de atún rojo", ["pescado", "soja", "sésamo"]], ["Entrante", "Crema de marisco", ["crustáceos", "moluscos", "lácteos"]],
        ["Principal", "Solomillo con foie y reducción de Pedro Ximénez", ["sulfitos", "lácteos"]], ["Postre", "Sorbete de mandarina y uvas de la suerte", ["sulfitos"]]] },
      { id: "reyes", nombre: "Comida de Reyes", precio: 45, dias: ["01-06"], platos: [
        ["Entrante", "Ensalada de perdiz escabechada", ["sulfitos"]], ["Principal", "Rape a la marinera", ["pescado", "moluscos", "crustáceos"]],
        ["Postre", "Roscón de Reyes con nata", ["gluten", "huevo", "lácteos", "frutos de cáscara"]]] },
    ],
    encargos: [
      { nombre: "Roscón de Reyes", detalle: "Para 6-8 personas", precio: 22, alergenos: ["gluten", "huevo", "lácteos", "frutos de cáscara"] },
      { nombre: "Cordero asado", detalle: "Medio cordero con guarnición", precio: 85, alergenos: [] },
      { nombre: "Bandeja de surtido navideño", detalle: "1 kg de turrones y dulces", precio: 28, alergenos: ["gluten", "huevo", "lácteos", "frutos de cáscara"] },
    ],
  },
  bar: {
    tema: "verde", nombre: "Bar El Cruce", tipo: "Bar de barrio · Demo", lema: "Las cenas de Navidad de toda la vida, sin complicarse.",
    whatsapp: "34600000000", direccion: "Plaza del Mercado 3, tu ciudad", horario: "Todos los días de 8:00 a 24:00 · Cerrado 25 de diciembre y 1 de enero",
    tituloEncargos: "Encargos de Navidad", textoEncargos: "Nos lo pides y te lo tenemos listo para recoger.",
    horas: ["14:00", "15:00", "21:00", "22:00"],
    menus: [
      { id: "amigos", nombre: "Cena de amigos", precio: 22, dias: "diciembre", platos: [
        ["Para compartir", "Tabla de ibéricos y queso", ["lácteos"]], ["Para compartir", "Croquetas caseras", ["gluten", "lácteos", "huevo"]],
        ["Principal", "Secreto a la brasa o bacalao con tomate", ["pescado"]], ["Postre", "Flan casero y café", ["huevo", "lácteos"]]] },
      { id: "empresa", nombre: "Menú de empresa", precio: 28, dias: "diciembre", platos: [
        ["Para compartir", "Gambas al ajillo", ["crustáceos"]], ["Para compartir", "Ensaladilla de la casa", ["huevo", "pescado"]],
        ["Principal", "Cochinillo o merluza a la romana", ["gluten", "pescado", "huevo"]], ["Postre", "Tarta de la abuela", ["gluten", "lácteos", "huevo"]]] },
      { id: "nochevieja", nombre: "Cotillón de Nochevieja", precio: 35, dias: ["12-31"], platos: [
        ["Para compartir", "Picoteo de la casa", ["gluten", "lácteos"]], ["Principal", "Carrillada al vino", ["sulfitos"]], ["Brindis", "Uvas, cava y bolsa de cotillón", ["sulfitos"]]] },
    ],
    encargos: [
      { nombre: "Tortilla de patatas grande", detalle: "Para 8 personas", precio: 15, alergenos: ["huevo"] },
      { nombre: "Bandeja de canapés", detalle: "30 unidades variadas", precio: 32, alergenos: ["gluten", "lácteos", "huevo", "pescado"] },
      { nombre: "Roscón de Reyes", detalle: "Tamaño mediano", precio: 18, alergenos: ["gluten", "huevo", "lácteos", "frutos de cáscara"] },
    ],
  },
};
