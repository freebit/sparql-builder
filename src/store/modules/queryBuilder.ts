import RdfTriple from "@/types/RdfTriple";
const state = {
  triples: [],
  keyWords: {
    select: {
      strName: "SELECT"
    },
    where: {
      strName: "WHERE"
    }
  },

  result: ""
};

const actions = {
  addTriple({ commit }: any, rdfSubject: string) {
    const triple: RdfTriple = {
      _uid: `uid_${getUid()}`,
      _subject: rdfSubject || "",
      _predicat: "",
      _object: "",
      selected: []
    };
    commit("ADD_TRIPLE", triple);
  },

  removeTriple({ commit }: any, index: number) {
    commit("REMOVE_TRIPLE", index);
  },

  generateQuery({ commit, state }: any) {
    let selectedFields: string[] = [];
    let whereBody: string = "";
    state.triples.forEach(
      (triple: RdfTriple, idx: number, arr: RdfTriple[]) => {
        selectedFields = [...selectedFields, ...triple.selected];
        if (triple._subject || triple._predicat || triple._object) {
          whereBody += `\t${triple._subject} ${triple._predicat} ${
            triple._object
          }.${idx !== arr.length - 1 ? "\n" : ""}`;
        }
      }
    );
    if (!whereBody.replace(/(\s|\.)/g, "").length) {
      return;
    }
    // const fields = [...new Set([...selectedFields])].join(" "); // оставляем только уникальные значения
    const fields = selectedFields.join(" ");
    const result = `${state.keyWords.select.strName} ${fields} ${
      state.keyWords.where.strName
    } {
      ${whereBody}\r}`;

    commit("SET_RESULT", result);
  }
};

const mutations = {
  ADD_TRIPLE(state: any, triple: RdfTriple) {
    state.triples.push(triple);
    /* eslint-disable no-debugger */
  },
  REMOVE_TRIPLE(state: any, index: number) {
    state.triples.splice(index, 1);
  },
  SET_RESULT(state: any, result: string) {
    state.result = result;
  }
};

const getters = {};

const getUid = () => {
  return Math.random()
    .toString(36)
    .substr(2, 9);
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
};
