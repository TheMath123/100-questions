/*
8) Desenvolva um programa que leia uma distância em metros e mostre os valores
relativos em outras medidas.
Ex:
Digite uma distância em metros: 185.72
A distância de 85.7m corresponde a:
0.18572Km
18.572Dam
1.8572Hm
1857.2dm
18572.0cm
185720.0mm
*/

const tranfor = (value) => {
  const km = value / 1000;
  const dam = value / 10;
  const hm = value / 100;
  const dm = value * 10;
  const cm = value * 100;
  const mm = value * 1000;
  console.log(
    km,
    "km\n",
    dam,
    "dam\n",
    hm,
    "hm\n",
    dm,
    "dm\n",
    cm,
    "cm\n",
    mm,
    "mm"
  );
};

tranfor(185.72);
