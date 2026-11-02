"use strict";
const L = LOCALES[document.documentElement.dataset.local];
const $ = id => document.getElementById(id);
const esc = t => String(t).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const euros = n => n.toLocaleString("es-ES", { minimumFractionDigits: n % 1 ? 2 : 0 }) + " €";
const alerg = l => l.length ? `<span class="al">Contiene: ${esc(l.join(", "))}</span>` : `<span class="al">Sin alérgenos declarados</span>`;
const FMT = new Intl.DateTimeFormat("es-ES", { weekday: "long", day: "numeric", month: "long" });

document.documentElement.classList.add(L.tema);
document.title = `${L.nombre} · Navidad`;
document.querySelectorAll("[data-n]").forEach(e => { e.textContent = L[e.dataset.n] ?? ""; });

/** Fechas que aún no han pasado. Desde el 7 de enero se muestra ya la campaña siguiente. */
function fechas(m, hoy = new Date()) {
  const base = new Date(hoy.getFullYear(), hoy.getMonth(), hoy.getDate());
  const inicio = base.getMonth() === 0 && base.getDate() <= 6 ? base.getFullYear() - 1 : base.getFullYear();
  if (m.dias === "diciembre") {
    return Array.from({ length: 23 }, (_, i) => new Date(inicio, 11, i + 1)).filter(d => d >= base && d.getDate() !== 24);
  }
  return m.dias.map(t => { const [me, di] = t.split("-").map(Number); return new Date(me === 1 ? inicio + 1 : inicio, me - 1, di); }).filter(d => d >= base);
}

$("lista-menus").innerHTML = L.menus.map(m => {
  let cat = "";
  const filas = m.platos.map(([c, p, al]) => {
    const t = c !== cat ? `<h4>${esc(c)}</h4>` : ""; cat = c;
    return `${t}<p class="plato">${esc(p)}${alerg(al)}</p>`;
  }).join("");
  return `<article class="tarjeta"><h3>${esc(m.nombre)}</h3><p class="precio">${euros(m.precio)} <small>por persona</small></p>${filas}<button class="boton pedir" data-m="${m.id}">Reservar este menú</button></article>`;
}).join("");

$("lista-encargos").innerHTML = L.encargos.map(e => `<article class="encargo"><div><h3>${esc(e.nombre)}</h3><p>${esc(e.detalle)}</p>${alerg(e.alergenos)}</div><div class="der"><b>${euros(e.precio)}</b><a class="boton claro" target="_blank" rel="noopener" href="https://wa.me/${L.whatsapp}?text=${encodeURIComponent(`Hola, quiero encargar: ${e.nombre} (${e.detalle}). ¿Para qué día puede ser?`)}">Encargar</a></div></article>`).join("");

const fm = $("f-menu"), fd = $("f-dia"), fp = $("f-personas");
fm.innerHTML = L.menus.map(m => `<option value="${m.id}">${esc(m.nombre)} · ${euros(m.precio)}</option>`).join("");
const menu = () => L.menus.find(m => m.id === fm.value);
function total() {
  const n = Math.max(1, Math.min(60, Number(fp.value) || 1));
  $("total").textContent = `Total orientativo: ${euros(n * menu().precio)} (${n} × ${euros(menu().precio)})`;
}
/** Las cenas señaladas solo se reservan por la noche. */
function horas() {
  const noche = /^noche/.test(menu().id);
  $("f-hora").innerHTML = L.horas.filter(h => !noche || parseInt(h) >= 20).map(h => `<option>${h}</option>`).join("");
}
function dias() {
  horas();
  const l = fechas(menu());
  fd.innerHTML = l.length ? l.map(d => `<option>${FMT.format(d)}</option>`).join("") : `<option value="">Fechas de este año agotadas</option>`;
  total();
}
fm.onchange = dias; fp.oninput = total; dias();
document.querySelectorAll(".pedir").forEach(b => b.onclick = () => { fm.value = b.dataset.m; dias(); $("reservar").scrollIntoView({ behavior: "smooth" }); });

$("form").onsubmit = e => {
  e.preventDefault();
  if (!fd.value) return;
  const t = [`Hola, quiero reservar en ${L.nombre}.`, `Menú: ${menu().nombre}`, `Día: ${fd.value}`, `Hora: ${$("f-hora").value}`, `Personas: ${fp.value}`, `Nombre: ${$("f-nombre").value.trim()}`];
  if ($("f-nota").value.trim()) t.push(`Alergias o comentarios: ${$("f-nota").value.trim()}`);
  window.open(`https://wa.me/${L.whatsapp}?text=${encodeURIComponent(t.join("\n"))}`, "_blank", "noopener");
};
$("flotante").href = `https://wa.me/${L.whatsapp}?text=${encodeURIComponent(`Hola, quiero información para reservar en ${L.nombre}.`)}`;
$("imprimir").onclick = () => window.print();

/** Próxima fecha señalada, para la cuenta atrás. */
const prox = L.menus.flatMap(m => m.dias === "diciembre" ? [] : fechas(m).map(d => [d, m.nombre]))
  .sort((a, b) => a[0] - b[0])[0];
if (prox) {
  const d = Math.ceil((prox[0] - new Date()) / 864e5);
  const c = $("cuenta");
  c.hidden = false;
  c.textContent = d <= 0 ? `Hoy: ${prox[1]}` : `Faltan ${d} ${d === 1 ? "día" : "días"} para: ${prox[1]}`;
}

if (!matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const n = document.querySelector(".nieve");
  n.innerHTML = Array.from({ length: 24 }, () => `<i style="left:${Math.random() * 100}%;animation-delay:-${Math.random() * 14}s;animation-duration:${9 + Math.random() * 9}s;opacity:${.3 + Math.random() * .5}"></i>`).join("");
}
