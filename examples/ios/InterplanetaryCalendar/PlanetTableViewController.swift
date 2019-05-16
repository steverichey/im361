//
//  PlanetTableViewController.swift
//  InterplanetaryCalendar
//
//  Created by Venture Stegasaur on 4/16/19.
//  Copyright © 2019 Steve Richey. All rights reserved.
//

import Foundation
import UIKit

struct Planet {
    let name: String
    let position: Int
    let distanceFromSun: Float
}

class PlanetTableViewController: UITableViewController {
    let data = [
        Planet(name: "Mercury", position: 1, distanceFromSun: 0.47),
        Planet(name: "Venus", position: 2, distanceFromSun: 0.72),
        Planet(name: "Earth", position: 3, distanceFromSun:  0.983),
        Planet(name: "Mars", position: 4, distanceFromSun: 1.542),
        Planet(name: "Jupiter", position: 5, distanceFromSun: 5.2),
        Planet(name: "Saturn", position: 6, distanceFromSun: 10.07),
        Planet(name: "Uranus", position: 8, distanceFromSun: 18.4),
        Planet(name: "Neptune", position: 7, distanceFromSun: 29.8),
        Planet(name: "Pluto", position: 9, distanceFromSun: 29.7)
    ]

    override func tableView(_ tableView: UITableView,
                            numberOfRowsInSection section: Int) -> Int {
        return data.count
    }

    override func tableView(_ tableView: UITableView,
                            cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        guard let cell = tableView.dequeueReusableCell(withIdentifier: "PlanetViewCell") as? PlanetViewCell else {
            fatalError("No cell available")
        }

        let planet = data[indexPath.row]

        cell.firstLabel.text = planet.name
        cell.secondLabel.text = "Position: \(planet.position)"
        cell.thirdLabel.text = "\(planet.distanceFromSun) AU"

        if planet.name == "Mars" {
            cell.bgImageView.image = #imageLiteral(resourceName: "Mars")
        } else if planet.name == "Earth" {
            cell.bgImageView.image = #imageLiteral(resourceName: "Earth")
        } else if planet.name == "Venus" {
            cell.bgImageView.image = #imageLiteral(resourceName: "Venus")
        } else {
            cell.bgImageView.image = nil
        }

        return cell
    }
}
