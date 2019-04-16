//
//  GreenViewController.swift
//  InterplanetaryCalendar
//
//  Created by Venture Stegasaur on 4/14/19.
//  Copyright © 2019 Steve Richey. All rights reserved.
//

import Foundation
import UIKit

struct Planet {
    let name: String
    let position: Int
    let distanceFromSun: Float
    let diameter: Float
    let orbitalVelocity: Float
    let rotationalVelocity: Float
}

class GreenViewController: UIViewController {
    override func viewDidLoad() {
        super.viewDidLoad()

        let array1 = [
            1,
            2,
            3,
            4,
            5
        ]

        let array2 = [
            "first",
            "second",
            "third",
            "fourth",
            5
        ]
    }

    @IBAction func didPressGoBack(_ sender: Any) {
        dismiss(animated: true, completion: nil)
    }
}
