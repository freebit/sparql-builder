import RdfTriple from "./RdfTriple";
const state = {
  triples: [],
  keyWords: {
    select: {
      strName: "SELECT",
      arguments: []
    },
    where: {
      strName: "WHERE",
      arguments: []
    }
  }
};

const actions = {
  addTriple({ commit, store }: any, rdfSubject: string) {
    const triple: RdfTriple = {
      _uid: `uid_${(new Date).getTime()}`,
      _subject: rdfSubject,
      _predicat: "",
      _object: "",
      isSelected: false
    };
    commit("ADD_TRIPLE", triple);
  }
};

const mutations = {
  ADD_TRIPLE(state: any, triple: RdfTriple) {
    state.triples.push(triple);
  }
};

const getters = {};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
};
