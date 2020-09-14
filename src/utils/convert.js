import { NavLinkModel } from "../models/NavLinkModel";
import { PageModel } from "../models/PageModel";
import { VideoModel } from "../models/VideoModel";
import { NavLinkMobileModel } from "../models/NavMobileLinkModel";
import { BackgroundImageModel } from "../models/BackgroundImageModel";

export class Convert {
    static toNavLinkModel = contentfulModel => {
        let pages = contentfulModel.pages
        let pageIds = contentfulModel.pages.map((page) => {
            return page.contentful_id;
        })
        return new NavLinkModel(
            contentfulModel.contentful_id,
            contentfulModel.title,
            pageIds,
            pages,
            contentfulModel.order
        )
    }

    static toBackgroundImageModel = contentfulModel => {
        return new BackgroundImageModel(
            contentfulModel.contentful_id,
            contentfulModel.image.title,
            contentfulModel.image.fluid
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
            contentfulModel.showTitle,
            contentfulModel.slug,
            contentfulModel.template,
            contentfulModel.content,
            contentfulModel.order
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