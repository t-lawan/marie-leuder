import { NavLinkModel } from "../models/NavLinkModel";
import { PageModel } from "../models/PageModel";
import Background from "../components/background/background";
import { VideoModel } from "../models/VideoModel";

export class Convert {
    static toNavLinkModel = contentfulModel => {
        return new NavLinkModel(
            contentfulModel.contentful_id,
            contentfulModel.title,
            contentfulModel.externalLink,
            contentfulModel.page.contentful_id,
            contentfulModel.page.slug,
            false
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