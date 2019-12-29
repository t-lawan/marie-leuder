import { NavLinkModel } from "../models/NavLinkModel";
import { PageModel } from "../models/PageModel";

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

    static toModelArray = (query, modelConverter) => {
        const modelArray = []
        query.edges.forEach((contentfulModel) => {
          let model = modelConverter(contentfulModel.node)
          modelArray.push(model)
        })
        return modelArray;
      }
}