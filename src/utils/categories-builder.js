/* const menu = [
  {
    id: 71,
    documentId: "zjwtalxi1i4nt9a6xs4duvom",
    name: "Creatine",
    slug: "creatine",
    description: null,
    parent: null,
  },
  {
    id: 72,
    documentId: "g9yjpho50xa0igiuaano5yqq",
    name: "Amino acids",
    slug: "amino-acids",
    description: null,
    parent: null,
  },
  {
    id: 74,
    documentId: "pv9ikmqbjxri84m445w5x2nx",
    name: "Casein",
    slug: "casein",
    description: null,
    parent: {
      id: 79,
      documentId: "z57tnjeogtzd9abghiwua6vg",
      name: "Protein",
      slug: "protein",
      description: null,
    },
  },
  {
    id: 75,
    documentId: "fhnmmsdd7ebpbv3yjhaxhlm6",
    name: "Endurance",
    slug: "endurance",
    description:
      "Push further. Go longer.\nEndurance supplements designed to boost stamina, delay fatigue, and help you last through every rep, mile, or set.",
    parent: {
      id: 68,
      documentId: "qxsoq40un0epo7yd6jwthla2",
      name: "Featured ",
      slug: "featured",
      description: "descr",
    },
  },
  {
    id: 76,
    documentId: "bklvupj41jetphfzhkxevq75",
    name: "Gainers",
    slug: "gainers",
    description: null,
    parent: null,
  },
  {
    id: 77,
    documentId: "dxhbvrp2zy4agzaelnxzd1ss",
    name: "Intra-Workout",
    slug: "intra-workout",
    description:
      "Sustain performance during your workout.\nIntra-workout formulas designed to fuel your muscles, delay fatigue, and keep you at peak performance from start to finish.",
    parent: {
      id: 68,
      documentId: "qxsoq40un0epo7yd6jwthla2",
      name: "Featured ",
      slug: "featured",
      description: "descr",
    },
  },
  {
    id: 78,
    documentId: "z003kxcmbwqlrg90oflg7vqi",
    name: "Power",
    slug: "power",
    description:
      "Unleash your full potential.\nPower supplements that ignite strength, boost intensity, and maximize your performance",
    parent: {
      id: 68,
      documentId: "qxsoq40un0epo7yd6jwthla2",
      name: "Featured ",
      slug: "featured",
      description: "descr",
    },
  },
  {
    id: 79,
    documentId: "z57tnjeogtzd9abghiwua6vg",
    name: "Protein",
    slug: "protein",
    description: null,
    parent: null,
  },
  {
    id: 81,
    documentId: "jwq3qjzbiugtfwtt1i81p3jm",
    name: "BCAA",
    slug: "bcaa",
    description: null,
    parent: {
      id: 72,
      documentId: "g9yjpho50xa0igiuaano5yqq",
      name: "Amino acids",
      slug: "amino-acids",
      description: null,
    },
  },
  {
    id: 82,
    documentId: "yxmf30ek0bdn57an2mtohq03",
    name: "Whey Protein",
    slug: "whey_protein",
    description: null,
    parent: {
      id: 79,
      documentId: "z57tnjeogtzd9abghiwua6vg",
      name: "Protein",
      slug: "protein",
      description: null,
    },
  },
]; */

export const categoriesBuilder = (menu) => {
  const map = new Map();

  // Копіюємо лише потрібні поля
  menu.forEach(({ id, name, slug, parent, documentId }) => {
    map.set(id, {
      name,
      slug,
      documentId,
      parent: parent ? parent.slug : null,
      children: [],
    });
  });

  const tree = [];

  menu.forEach(({ id, parent }) => {
    if (parent && map.has(parent.id)) {
      map.get(parent.id).children.push(map.get(id));
    } else if (!parent) {
      tree.push(map.get(id));
    }
  });

  return tree;
};

// const categoriesTree = categoriesBuilder(menu);
// console.log(JSON.stringify(categoriesTree, null, 2));
