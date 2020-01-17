import { NavLinkModel } from "../models/NavLinkModel";
import { PageModel } from "../models/PageModel";
import { VideoModel } from "../models/VideoModel";
import { NavLinkMobileModel } from "../models/NavMobileLinkModel";

export class Convert {
    static toNavLinkModel = contentfulModel => {
        let pages = contentfulModel.pages.map((page) => {
            return page.contentful_id;
        })
        return new NavLinkModel(
            contentfulModel.contentful_id,
            contentfulModel.title,
            contentfulModel.page.contentful_id,
            pages
        )
    }

    static toNavLinkMobileModel = contentfulModel => {
        return new NavLinkMobileModel(
            contentfulModel.contentful_id,
            contentfulModel.title,
            contentfulModel.page.contentful_id,
        )
    }

    static toPageModel = contentfulModel => {
        return new PageModel(
            contentfulModel.contentful_id,
            contentfulModel.title,
            contentfulModel.slug,
            contentfulModel.template,
            contentfulModel.content
        )
    }

    static toVideoModel = contentfulModel => {
        return new VideoModel(
            contentfulModel.contentful_id,
            contentfulModel.title,
            contentfulModel.url
        )
    }

    static toModelArray = (query, modelConverter) => {
        const modelArray = []
        query.edges.forEach((contentfulModel) => {
          let model = modelConverter(contentfulModel.node)
          modelArray.push(model)
        })
        return modelArray;
      }
}