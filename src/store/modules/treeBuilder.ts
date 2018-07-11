import BeeTree from "@/types/BeeTree";
import BeeTreeNode from "@/types/BeeTreeNode";
const state = {
  tree: new BeeTree(null)
};

const actions = {
  addNode({ commit }: any, nodeValue: number | string) {
    const newNode: BeeTreeNode = new BeeTreeNode(nodeValue);
    commit("ADD_NODE", newNode);
  },
  removeNode({ commit }: any, node: BeeTreeNode) {
    commit("REMOVE_NODE", node);
  }
};

const mutations = {
  ADD_NODE(state: any, node: BeeTreeNode) {
    state.tree.add(node);
  },
  REMOVE_NODE(state: any, node: BeeTreeNode) {
    state.tree.remove(node);
  }
};

const getters = {
  getNodeCount: (state: any) => () => state.tree.counter
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
};
