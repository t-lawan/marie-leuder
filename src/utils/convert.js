import { NavLinkModel } from "../models/NavLinkModel";
import { PageModel } from "../models/PageModel";

export class Convert {
    static toNavLinkModel = contentfulModel => {
        return new NavLinkModel(
            contentfulModel.contentful_id,
            contentfulModel.title,
            contentfulModel.externalLink,
            contentfulModel.page.contentful_id
        )
    }

    static toPageModel = contentfulModel => {
        return new PageModel(
            contentfulModel.contentful_id,
            contentfulModel.title,
            contentfulModel.template,
            contentfulModel.content
        )
    }

    static toModelArray = (query, modelConverter) => {
        const modelArray = []
        query.edges.map(contentfulModel => {
          let model = modelConverter(contentfulModel.node)
          modelArray.push(model)
        })
        return modelArray;
      }
}