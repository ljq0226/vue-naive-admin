import { defineStore } from 'pinia'
import { tagsSS, activeTag, tags, WITHOUT_TAG_PATHS } from './helpers'

export const useTagsStore = defineStore('tag', {
  state() {
    return {
      tags: tags || [],
      activeTag: activeTag || '',
    }
  },
  actions: {
    //设置当前路径的component为当前tag
    setActiveTag(path) {
      this.activeTag = path
      tagsSS.set('activeTag', path)
    },
    //增加tag进tags
    addTag(tag = {}) {
      //如果传入path为不需要tag标签的组件 或 tags已有该tag 则直接返回
      if (WITHOUT_TAG_PATHS.includes(tag.path) || this.tags.some((item) => item.path === tag.path)) return

      this.tags.push(tag)
      tagsSS.set('tags', this.tags)
    },
    //删除tag
    removeTag(path) {
      this.tags = this.tags.filter((tag) => tag.path !== path)
      tagsSS.set('tags', this.tags)
    },
  },
})
